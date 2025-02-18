import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {Login} from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to='/Signup' />} />
        <Route path="/register" element={<Signup  />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
