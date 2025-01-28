import React, { createContext, useState, useEffect, } from 'react';
import { login, register, logout } from '../service/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ role: 'admin' });
      const userRole = token.split(' ')[1];
      console.log(userRole);
      setUser({ ...user, role: userRole });
    }
  }, []);

  const authLogin = async (email, password) => {
    const data = await login(email, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const authRegister = async (username, email, password,role) => {
    const data = await register(username, email, password,role);
    setUser(data.user);
    console.log( data.user );
    
    localStorage.setItem('token', data.token);
  };

  const authLogout = () => {
    logout();
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
