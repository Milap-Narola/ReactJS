import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../pages/context/AuthContext';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-6 space-y-4">
      {user && user.role === 'teacher' && (
        <>
          <Link to="/exams/create" className="block px-4 py-2 bg-blue-500 rounded-lg">Create Exam</Link>
          <Link to="/exams" className="block px-4 py-2 bg-green-500 rounded-lg">Manage Exams</Link>
        </>
      )}
      {user && user.role === 'student' && (
        <>
          <Link to="/exams" className="block px-4 py-2 bg-blue-500 rounded-lg">Take Exams</Link>
          <Link to="/results" className="block px-4 py-2 bg-green-500 rounded-lg">View Results</Link>
        </>
      )}
      {user && user.role === 'admin' && (
        <>
          <Link to="/admin-dashboard" className="block px-4 py-2 bg-red-500 rounded-lg">Admin Dashboard</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
