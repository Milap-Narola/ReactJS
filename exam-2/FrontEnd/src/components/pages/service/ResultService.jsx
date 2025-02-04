import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getResult = async (id) => {
  const res = await axios.get(`${API_URL}/results/${id}`);
  return res.data;
};
