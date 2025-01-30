import React from 'react';
import { Button } from '../../common/Button';
const AdminDashboard = () => {
  return (
    <div className="p-10 w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <p className="text-lg mt-4">Manage users, exams, and results.</p>
      
      <div className="mt-6 space-y-4  flex flex-col md:flex-row md:space-x-4 md:space-y-0">
        <Button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Manage Users</Button>
        <Button className="px-4 py-2 bg-green-500 text-white rounded-lg">Manage Exams</Button>
        <Button className="px-4 py-2 bg-red-500 text-white rounded-lg">View Results</Button>
      </div>
    </div>
  );
};

export default AdminDashboard;