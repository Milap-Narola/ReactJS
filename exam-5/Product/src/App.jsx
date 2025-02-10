import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <Router>
            <>
                <Navbar user={user} setUser={setUser} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />} />
                    <Route path="/signup" element={!user ? <Signup setUser={setUser} /> : <Navigate to="/" />} />
                </Routes>
            </>
        </Router>
    );
};

export default App;
