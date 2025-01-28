import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    return res.data;
  } catch (error) {
    console.error('Error during login', error.message);

  }
};

export const register = async (username, email, password) => {
  try {
    const res = await axios.post(`${API_URL}/register`,
      { username, email, password });
    return res.data;
  } catch (error) {
    console.error('Error during registration:', error.message);
    throw error;

  }
};

 export const logout = () => {
  localStorage.removeItem('token');
};
