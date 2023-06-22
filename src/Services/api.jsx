import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3309/', // url da minha aplicação
});

export default api;