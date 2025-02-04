import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../pages/context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="w-screen  bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold hover:text-blue-400 transition duration-300">Home</Link>
      <div className="space-x-4 flex items-center ">
        {user ? (<> <span className="text-lg font-bold ">{user.username}</span>
          <Link to={`/${user.role}-dashboard`} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">Dashboard</Link>
          <button onClick={logout} className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">Logout</button>
        </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition duration-300">Login</Link>
            <Link to="/register" className="px-4 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-300">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};