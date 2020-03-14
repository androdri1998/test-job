import axios from 'axios';
import { baseUrl } from '../utils/urls.contants';

const api = axios.create({
  baseURL: baseUrl
})

export default api;