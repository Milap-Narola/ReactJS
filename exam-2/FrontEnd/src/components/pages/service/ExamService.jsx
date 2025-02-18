import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getExams = async () => {
  const res = await axios.get(`${API_URL}/exam/getexams`);
  return res.data;
};

export const getExam = async (id) => {
  const res = await axios.get(`${API_URL}exam/${id}/getexam`);
  return res.data;
};

export const createExam = async (examData) => {
  const res = await axios.post(`${API_URL}/exams/create`, examData);
  return res.data;
};

export const submitExam = async (id, answers) => {
  const res = await axios.post(`${API_URL}/exams/${id}/submit`, { answers });
  return res.data;
};
