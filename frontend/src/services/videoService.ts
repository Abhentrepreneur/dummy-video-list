import axios from 'axios';

const API_URL = 'https://c2b7-165-225-124-155.ngrok-free.app/api/videos';

export const getVideos = () => {
  return axios.get(`${API_URL}`);
};
