import React, { useState, useContext } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student'
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, role } = formData;
    let res = await register(username, email, password, role);
    console.log('Registration Successful:', res);
    navigate('/login');

  };


  return (<div className="flex items-center justify-center  min-h-screen bg-gray-900">
    <div className='w-full max-w-md  p-6 bg-gray-800 rounded-lg shadow-lg '>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-8 bg-gray-800 text-white shadow-xl rounded-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter userName"
          className="w-full px-4 py-3 bg-gray-900 border text-white rounded-lg text-center"
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="w-full px-4 py-3 bg-gray-900 border text-white rounded-lg text-center"
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter  Password"
          className="w-full px-4 py-3 bg-gray-900 border text-white rounded-lg  text-center"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-900 border text-centre  rounded-lg "
        >
          <option value="admin" className='text-center'>Admin</option>
          <option value="teacher" className='text-center'>Teacher</option>
          <option value="student" className='text-center'>Student</option>
        </select>
        <Button
          type="submit"
          className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        > Register
        </Button>
        <p className="text-center text-sm text-gray-400">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </form>
    </div>
  </div>
  );
};
