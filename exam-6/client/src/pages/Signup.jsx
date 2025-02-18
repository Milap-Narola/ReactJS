import React, { useState } from "react";
import API  from "../config/Api";
import Cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role:'user'
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const createUser = async (data) => {
    // api call
    console.log(data);

    let res = await API.post("/users/signup", data);
    const { user, token } = res.data;
    console.log(user, token);
    Cookies.set("token", token, { expires: 1 });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user);
  };
  return (
    <div className="flex items-center justify-center w-screen top-0 left-0 min-h-screen bg-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-100">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">Signup</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleInput}
            className="w-full px-4 py-2 border rounded-lg font-bold text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInput}
            className="w-full px-4 py-2 border rounded-lg font-bold text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-lg font-bold text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="button"
              className="absolute inset-y-3  right-1 flex items-center outerline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <select
            name="role"
            value={user.role}
            onChange={handleInput}
            className="w-full px-4 py-2 border rounded-lg font-bold text-black focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="submit"
            value="Signup"
            className="w-full bg-blue-600 text-white py-2 font-bold rounded-lg hover:bg-blue-700 cursor-pointer"
          />
          <p className="text-center font-bold  text-gray-500 mt-4">
            Already have an account? <a href="/login" className="text-blue-500 font-bold hover:text-blue-600">Login</a>
            <p className="mt-4 font-bold text-gray-600">
              Forgot your password? <a href="/forgot-password" className=" hover:text-red-600">Reset Password</a>
            </p>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
