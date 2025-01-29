import React, { createContext, useState, useEffect, } from 'react';
import { login, register, logout } from '../service/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userRole = token.split(' ')[1];
      setUser({ role: userRole });
    }
  }, []);

  const authLogin = async (email, password) => {
    try {
      let data = await login(email, password);
      if (data?.token)
        localStorage.setItem('token', data.token);
      setUser({ role: data.role });
      return { user: { role: data.role } };
    } catch (error) {
      console.log('Login Failed', error);

    }
  };

  const authRegister = async (username, email, password, role) => {
    try {
      let res = await register(username, email, password, role);
      if (res?.token)
        localStorage.setItem('token', res.token)
      setUser({ role })
      return
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
