import React, { createContext, useState, useEffect,  } from 'react';
import { login, register, logout } from '../service/AuthService';

export const AuthContext = createContext();

export const  AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ role: 'admin' });
      // TODO: Fetch user's role and additional data
      // const userRole = await getUserRole(token);
      setUser({...user, role: userRole });
    }
  }, []);

  const authLogin = async (email, password) => {
    const data = await login(email, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const authRegister = async (username, email, password) => {
    const data = await register(username, email, password);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const authLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login: authLogin, register: authRegister, logout: authLogout }}>
      {Children}
    </AuthContext.Provider>
  );
};
