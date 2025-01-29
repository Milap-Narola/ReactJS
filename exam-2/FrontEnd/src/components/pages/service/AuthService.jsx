import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/api/login`, { email, password });
    return res.data;
  } catch (error) {
    console.error('Error during login', error.message);
  }
};

export const register = async (username, email, password, role) => {
  try {
    const res = await axios.post(`${API_URL}/api/register`, { username, email, password, role });
    console.log("Server Response:", res.data);
    return res.data;
  }
  catch (error) {
    console.error('Error during registration:', error.message);
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
