import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      {user && user.role === 'teacher' && (
        <>
          <Link to="/exams/create">Create Exam</Link>
          <Link to="/exams">Manage Exams</Link>
        </>
      )}
      {user && user.role === 'student' && (
        <>
          <Link to="/exams">Take Exams</Link>
          <Link to="/results">Results</Link>
        </>
      )}
      {user && user.role === 'admin' && (
        <>
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </>
      )}
    </div>
  );
};


export default Sidebar;
