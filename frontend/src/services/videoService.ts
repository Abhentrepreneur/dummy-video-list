import axios from 'axios';

const API_URL = 'https://00bd-165-225-124-166.ngrok-free.app/api/videos';

export const getVideos = () => {
  return axios.get(`${API_URL}`);
};
