import React, { useState } from "react";
import API from "../config/Api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value, });
  };

  const createUser = async (data) => {
    // api call
    try {
      let res = await API.post("/users/login", data);
      const { role, token } = res.data;
      // console.log(user, token);
      Cookies.set("token", token, { expires: 2 });
      navigate(role === "admin" ? "/admin-dashboard" : "/user-dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    createUser(user);
  };
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100">
      <div className=" p-6 rounded-lg w-100 bg-black">
        <h2 className="text-2xl font-semibold text-center mb-4 text-white">Login</h2>
        <form onSubmit={onSubmit} className="space-y-4 text-white">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInput}
            className="w-full px-4 py-2 border rounded-lg font-bold "
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle type
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-lg font-bold"
            />
            <button
              type="button"
              className="absolute inset-y-3  right-1 flex items-center"
              onClick={() => setShowPassword(!showPassword)} // Toggle visibility
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <input
            type="submit"
            value="Signup"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          />
          <p className="text-center text-white hover:text-orange-600 font-bold mt-4">
            Don't have an account? <a href="/signup" className=" hover:text-blue-600">Sign Up</a>
          </p>

        </form>
      </div >
    </div >
  );
};

export default Login;
