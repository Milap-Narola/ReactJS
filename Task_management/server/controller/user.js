const User = require("../model/user");
const { hashPassword, generateToken, compare } = require("../utils/helper");
const sendResetEmail = require("../service/mail");

exports.createUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(403).send({ message: "User already exists" });
  }
  req.body.password = await hashPassword(req.body.password);
  user = await User.create(req.body);
  let token = await generateToken({
    name: user.name,
    role: user.role,
    id: user.id,
  });
  return res.status(201).send({ user, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (!user) {
    return res.status(403).send({ message: "user not found" });
  }

  let isMatch = await compare(user.password, password);
  if (!isMatch) {
    return res.status(403).send({ message: "invalid password" });
  }
  let token = await generateToken({
    name: user.name,
    role: user.role,
    id: user.id,
  });
  return res.status(201).send({ user, token });
};
exports.getAllUsers = async (req, res) => {
  const { role } = req.query;
  let query = {}
  if (role) {
    query.role = { role }
  };
  let users = await User.find(query);
  res.status(200).send(users);
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await sendResetEmail(email, resetLink);

    res.status(200).json({ message: "Reset link sent to your email." });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.password = await hashPassword(newPassword);
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully." });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(400).json({ message: "Invalid or expired token." });
  }
};
