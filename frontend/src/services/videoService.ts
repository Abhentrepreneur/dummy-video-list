import axios from 'axios';

const API_URL = 'dummy-video-list-jkp9.vercel.app/';

export const getVideos = () => {
  return axios.get(`${API_URL}`);
};
