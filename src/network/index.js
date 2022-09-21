import axios from 'axios';
// import {WEATHER_URL} from '../config/apiConfig';
export const api = axios.create({
  timeout: 30000,
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use((req) => {
  

  if (!req.headers['Content-Type']) {
    req.headers['Content-Type'] = 'application/json';
  }
  req.headers.Accept = 'application/json';

  return req;
});
