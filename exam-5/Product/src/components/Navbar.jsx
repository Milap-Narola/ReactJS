import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <nav className="flex w-screen">
            {/* <h1 className="text-xl font-bold">My App</h1> */}
            <div>
                <Link to="/" className="mr-4">Home</Link>
                {!user ? (
                    <>
                        <Link to="/login" className="mr-4">Login</Link>
                        <Link to="/signup" className="mr-4">Signup</Link>
                    </>
                ) : (
                    <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
