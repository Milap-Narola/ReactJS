import React, { useState } from "react";
import { API } from "../config/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const nav=useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const createUser = async (data) => {
    // api call
    try {
      let res = await API.post("/users/login", data);
      const { user, token } = res.data;
      console.log(user, token);
      Cookies.set("token", token,{expires:2});
      nav("/")
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInput}
        />
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleInput}
        />

        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
};

export default Login;