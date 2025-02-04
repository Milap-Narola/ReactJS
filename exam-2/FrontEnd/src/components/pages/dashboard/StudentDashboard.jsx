import React from 'react';

const StudentDashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Student Dashboard</h1>
      <p className="text-lg mt-4">Attempt exams, view scores.</p>
      
      <div className="mt-6 space-y-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Attempt Exam</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">View Scores</button>
      </div>
    </div>
  );
};

export default StudentDashboard;
