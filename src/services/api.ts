import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apigobarber.joaof.dev',
});

export default api;
