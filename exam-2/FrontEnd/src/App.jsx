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


const App = () => {
  return (
    <div className='flex flex-col items-center bg-white'>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />

          <Route path="/auth" element={<h1>Auth</h1>}> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/dashboard" element={<h1>Dashboard</h1>}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Route>

      <Route path="/exams" element={<h1>Exams</h1>}>
        <Route path="/exams" exact element={<ExamList />} />
        <Route path="/exams/create" element={<ExamCreate />} />
        <Route path="/exams/:id" element={<ExamTake />} />
      </Route>

      <Route path="/results" element={<h1>Results</h1>}>
        <Route path="/results/:id" element={<ResultView />} />
      </Route>
      </Routes>

    </AuthProvider>
    </div> 
  );
}

export default App;
