import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="nav">
      <div className="linkbar">
        <Link to="/" className="link">Home</Link>
        <Link to="/login" className="link">Login</Link>
        <Link to="/signup" className="link">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;