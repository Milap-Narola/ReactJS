import React, { createContext, useState, useEffect, } from 'react';
import { login, register, logout } from '../service/AuthService';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser({ username: decoded.username, role: decoded.role });
    }
  }, []);
  const authLogin = async (email, password) => {
    try {
      let res = await login(email, password);
      if (res?.token)
        localStorage.setItem('token', res.token);

      const decoded = jwtDecode(res.token);
      setUser({ username: decoded.username, role: decoded.role });
      // console.log('Login Successful, Role:', decoded.role);
      return { user: { username: decoded.username, role: decoded.role } };

    } catch (error) {
      console.log('Login Failed', error);

    }
  };

  const authRegister = async (username, email, password, role) => {
    try {
      let res = await register(username, email, password, role);
      if (res?.token)
        localStorage.setItem('token', res.token)
      const decoded = jwtDecode(res.token);
      setUser({ username: decoded.username, role: decoded.role });
      return { user: { username: decoded.username, role: decoded.role } };
    } catch (error) {
      console.error('Registration Failed', error);
    }
  };

  const authLogout = () => {
    logout();
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value=
      {{
        user,
        login: authLogin,
        register: authRegister,
        logout: authLogout
      }}>
      {children}
    </AuthContext.Provider>
  );
};
