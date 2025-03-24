import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getGoogleAuth, LoggedIn } from '../config/firebase';
const Login = () => {
    const navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    const handleGoogleAuth = async () => {
        try {
            let userdata = await getGoogleAuth();
            console.log('Google User Data:', userdata);
            if (userdata) {
                localStorage.setItem('user', JSON.stringify(userdata));
                navigate("/");
            } else {
                console.error("No Google user data returned");
            }
        } catch (error) {
            console.error("Error during Google authentication:", error);
        }
    };


    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            let userData = await LoggedIn(email, password);
            console.log('User data:', userData);
            if (userData) {
                localStorage.setItem('user', JSON.stringify(userData));
                navigate("/");
            } else {
                console.error("No user data returned");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input type="submit" value="Login" />
            </form>
            <button onClick={handleGoogleAuth}>Sign in with Google</button>
            <div>
                <Link to="/signup">Sign-up</Link>
            </div>
        </div>
    );
};

export default Login;