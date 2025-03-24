import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { getGoogleAuth, signup } from '../config/firebase';

const Signup = () => {
    const navigate = useNavigate();
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
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
            let userData = await signup(email, password);
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
            <h2>Sign-Up</h2>
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
                <input type="submit" value="Sign-Up" />
            </form>
            <button onClick={handleGoogleAuth}>Sign Up with Google</button>
            <div>
                <Link to="/login">login</Link>
            </div>
        </div>
    )
}

export default Signup