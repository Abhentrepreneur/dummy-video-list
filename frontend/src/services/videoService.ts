import axios from 'axios';

const API_URL = 'http://localhost:5000/api/videos';

export const getVideos = () => {
  return axios.get(`${API_URL}`);
};
