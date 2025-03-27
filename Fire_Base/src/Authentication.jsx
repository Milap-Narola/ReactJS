import React, { useState } from 'react';
import { getGoogleAuth, login, resetPassword } from './config/Firebase';
import User from './Userdashboard';


const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleAuth = async () => {
    let userdata = await getGoogleAuth();
    console.log(userdata);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    let userData = await login(email, password);
    console.log(userData);
  };

  const handlereset = async (e) => {
    e.preventDefault();
    let userData = await resetPassword(email);
    console.log(userData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative mt-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <input
          type="submit"
          value="Login"
          className="w-full bg-blue-500 text-white font-bold p-2 rounded mt-4 cursor-pointer hover:bg-blue-600"
        />
      </form>
      <button
        onClick={handleGoogleAuth}
        className="mt-4 bg-red-500 text-white font-bold p-2 rounded cursor-pointer hover:bg-red-600"
      >
        Sign in with Google
      </button> */}
      <User />
    </div>
  );
};

export default Authentication;