import axios from 'axios';

const API_URL = 'https://dummy-video-list-jkp9.vercel.app/api/auth';

export const signup = (email: string, password: string) => {
  return axios.post(`${API_URL}/signup`, { email, password });
};

export const login = (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
