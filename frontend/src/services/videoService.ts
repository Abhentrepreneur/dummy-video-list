import axios from 'axios';

const API_URL = 'https://dummy-video-list-jkp9.vercel.app/api/videos';

export const getVideos = () => {
  return axios.get(`${API_URL}`);
};
