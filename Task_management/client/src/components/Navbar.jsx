import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserDetails } from "../userDetails";
import Cookies from "js-cookie";
import Ability from "../role/Ability";
const Navbar = () => {
  const nav = useNavigate();
  let user = getUserDetails();
  // console.log(user);
  const logOut = () => {
    Cookies.remove("token");
    nav("/login");
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className=" mx-auto w-full px-4">
        <ul className="flex items-center  space-x-4 ">
          <li>
            <Link className="text-blue-600 hover:text-blue-800" to="/">
              Home
            </Link>
            {Ability(["admin",]) && (
              <Link className="text-blue-600 hover:text-blue-800 ml-4" to="/assign">
                Assign
              </Link>
            )}
          </li>
          <li >
            {user ? (<button className="px-3 py-2 text-sm" onClick={logOut}> logout </button>) : (
              <Link className="text-blue-600 hover:text-blue-800" to="/login">
                Login
              </Link>
            )}
          </li>
          <li>
            {user ? (
              <p className="text-gray-700 font-medium">{user.name}</p>
            ) : (
              <Link className="text-blue-600 hover:text-blue-800" to="/signup">
                Signup
              </Link>
            )}
          </li>
          <div className="flex justify-end items-center w-full space-x-2">
            <input
              className="border border-gray-300 text-black rounded-lg px-2 py-1 text-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="bg-white text-white px-3 py-2 text-xs rounded-lg">
              Search
            </button>
          </div>

        </ul>
      </div>
    </nav>


  );
};

export default Navbar;
