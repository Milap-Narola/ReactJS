import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/context/AuthContext';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
const initialstate = {
  email: '',
  password: '',
}
export const Login = () => {
  const [formData, setFormData] = useState(initialstate);
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-900">
      <div className="w-full max-w-md  p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-gray-800 text-white shadow-xl rounded-lg space-y-6">
          {/* Email Input */}
          <Input
            type="email"
            value={email}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <Input
            type="password"
            value={password}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </Button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-4">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here!
          </a>
        </p>
      </div>
    </div>
  );
};
