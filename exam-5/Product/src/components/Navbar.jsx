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
        <nav className="flex w-screen  bg-black p-4 items-center ">
            <Link to="/" className="text-white  mr-4">Home</Link>

            <div>
                {!user ? (
                    <>
                        <Link to="/login" className="text-white mr-4 ">Login</Link>
                        <Link to="/signup" className="text-white mr-4 ">Signup</Link>
                    </>
                ) : (
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
