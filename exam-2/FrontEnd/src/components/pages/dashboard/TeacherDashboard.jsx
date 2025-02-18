import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Teacher Dashboard</h1>
      <p className="text-lg mt-4">Create exams, add questions, review student results.</p>
      
      <div className="mt-6 space-y-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Create Exam</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Add Questions</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Review Results</button>
      </div>
    </div>
  );
};

export default TeacherDashboard;