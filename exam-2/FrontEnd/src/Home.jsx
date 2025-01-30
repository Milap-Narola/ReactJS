import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center p-10 w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-zinc-900 font-thin">Welcome to the Exam Management System</h1>
      <p className="text-lg mt-4">Manage and take exams with ease.</p>
      <div className="mt-6">
        <Link to="/login" className="px-4 py-2  hover:bg-blue-500 bg-blue-950 text-white rounded-lg">Login</Link>
        <Link to="/register" className="ml-4 px-4 py-2 bg-black hover:bg-green-700 text-white rounded-lg">Register</Link>
      </div>
    </div>
  );
};

export default Home;