import axios from 'axios';
import {WEATHER_URL} from '../config/apiConfig';
export const api = axios.create({
  timeout: 30000,
  baseURL: WEATHER_URL,
});

api.interceptors.request.use((req) => {
  

  if (!req.headers['Content-Type']) {
    req.headers['Content-Type'] = 'application/json';
  }
  req.headers.Accept = 'application/json';

  return req;
});
