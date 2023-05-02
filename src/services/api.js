import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const getHelloWorld = async () => {
  const response = await api.get('/');
  return response.data;
};
