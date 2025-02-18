import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../userDetails";
import Cookies from "js-cookie";

const Navbar = () => {
  const nav = useNavigate();
  let user = getUserDetails();
  const isAuthenticated = !!user;
  const isAdmin = isAuthenticated && user.role === "admin";

  const logOut = () => {
    Cookies.remove("token");
    nav("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-3 fixed top-0 left-0 w-full shadow-md">
    <div className="container mx-auto flex justify-between items-center">
     
      <ul className="flex items-center space-x-4">
      <Link to="/" className="text-lg font-bold hover:text-yellow-300">
        Home
      </Link>
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to={isAdmin ? "/admin-dashboard" : "/user-dashboard"}
                className="hover:text-yellow-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <span className="text-lg font-bold">{user.name}</span>
            </li>
            <li>
              <button
                onClick={logOut}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="hover:text-yellow-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-yellow-300">
                Sign Up
              </Link>
            </li>
          </>
        )}
        
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;