import axios from 'axios';

const API_URL = 'https://00bd-165-225-124-166.ngrok-free.app/api/auth';

export const signup = (email: string, password: string) => {
  return axios.post(`${API_URL}/signup`, { email, password });
};

export const login = (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
