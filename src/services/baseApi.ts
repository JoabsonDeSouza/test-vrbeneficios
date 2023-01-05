import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/',
});

export default api;
