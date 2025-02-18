import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/context/AuthContext';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const res = await login(email, password);
      console.log("Logged In Succesfully:", res);
      if (res?.user?.role === 'student') {
        navigate('/student-dashboard')
      }
      else if (res?.user?.role === 'teacher') {
        navigate('/teacher-dashboard')
      }
      else if (res?.user?.role === 'admin') {
        navigate('/admin-dashboard')
      }
      else {
        navigate('/home')
      }
    } catch (error) {
      console.error('Login Failed', error);
    }
  };
  // console.log(formData);

  return (<div className="flex items-center justify-center  min-h-screen bg-gray-900">
    <div className="w-full max-w-md  p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Welcome Back!</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-gray-800 text-white shadow-xl rounded-lg space-y-6">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-gray-700  text-white  rounded-lg "
        />

        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-3 bg-gray-700  text-white  rounded-lg "
        />

        <Button
          type="submit"
          className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 "
        >
          Login
        </Button>
      </form>

      <p className="text-sm text-gray-400 text-center mt-4">
        Don't have an account?{''}
        <a href="/register" className="text-blue-500 hover:underline">
          Register here!
        </a>
      </p>
    </div>
  </div>
  );
};
