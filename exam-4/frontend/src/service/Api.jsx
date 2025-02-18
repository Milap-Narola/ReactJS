import axios from "axios";

const API_URL = "http://localhost:8090/api/v1";

export const registerUser = async (name, email, password, role) => {

  console.log({ name, email, password, role });
  try {
    const res = await axios.post(`${API_URL}/signup`, { name, email, password, role });
    return res.data;
  } catch (error) {
    throw error.res?.data || "Registration failed";
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    return res.data;
  } catch (error) {
    throw error.res?.data || "Login failed";
  }
};
