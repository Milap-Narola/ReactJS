import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/pages/auth/Login';
import { Register } from './components/pages/auth/Register';
import AdminDashboard from './components/pages/dashboard/AdminDashboard';
import TeacherDashboard from './components/pages/dashboard/TeacherDashboard';
import StudentDashboard from './components/pages/dashboard/StudentDashboard';
import ExamList from './components/pages/exam/ExamList';
import ExamCreate from './components/pages/exam/ExamCreate';
import ExamTake from './components/pages/exam/ExamTake';
import ResultView from './components/pages/result/ResultView';
import { AuthProvider } from './components/pages/context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import Home from './Home';

const App = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <AuthProvider>
        <Navbar />

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />

          {/* Exam Routes */}
          <Route path="/exams" element={<ExamList />} />
          <Route path="/exams/create" element={<ExamCreate />} />
          <Route path="/exams/:id" element={<ExamTake />} />

          {/* Results Route */}
          <Route path="/results/:id" element={<ResultView />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
