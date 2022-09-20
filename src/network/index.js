import axios from 'axios';
// import url from 'src/API/apiConfig';
// import {useSelector} from 'react-redux';
// import store from '../redux'

// const userId = store.getState().auth?.userId;
export const api = axios.create({
  timeout: 30000,
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

// Add a request interceptor (before any request)
api.interceptors.request.use((req) => {
  // const appId = '3b7a2dcdbe0ff845d0da048d6d2dcb3b';
  // if (token) {
  //   req.headers.Authorization = `Bearer ${token}`;
  // }
  // if (userId && !req.params?.patientId) {
  //   req.params = {...req.params, patientId: userId};
  // }
  if (!req.headers['Content-Type']) {
    req.headers['Content-Type'] = 'application/json';
  }
  req.headers.Accept = 'application/json';

  return req;
});
