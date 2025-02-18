const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const user = {

  register: async (req, res) => {
    try {
      const { username, email, password, role } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      let user = await User.create({
        username: username,
        email: email,
        password: hashPassword,
        role: role
      });



      let token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      },
        process.env.JWT_SECRET, { expiresIn: '1d' });
      console.log(user, token);
      res.status(201).json({
        message: 'User registered successfully',
        token,
        user: {
          id: user._id,
          username,
          email,
          role
        }
      });


    } catch (error) {
      console.log("Register error", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'User Not Found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Password Mismatch' });
      }

      let token = jwt.sign({
        id: user._id,
        username: user.username,
        role: user.role
      },
        process.env.JWT_SECRET,
        { expiresIn: '1d' });

      console.log(user, token);

      res.json({
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: error.message });
    }
  },

  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProfile: async (req, res) => {
    try {
      const { username, email } = req.body;
      const user = await User.findByIdAndUpdate(
        req.user.id,
        { username, email },
        { new: true }
      ).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        message: 'Profile updated successfully',
        user
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select('-password');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};


module.exports = user;


