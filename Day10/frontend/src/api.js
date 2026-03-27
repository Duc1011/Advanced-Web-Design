import axios from 'axios';

export const API_ORIGIN = process.env.REACT_APP_API_ORIGIN || 'http://localhost:3005';
const API = axios.create({ baseURL: `${API_ORIGIN}/api` });

export default API;
