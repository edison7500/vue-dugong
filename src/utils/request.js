import axios from 'axios';


const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 15000,
});

// request interceptor
service.interceptors.request.use(
  config =>
    // do something before request is sent

    config
  ,
  error =>
    // do something with request error
    // console.log(error); // for debug
    Promise.reject(error)
  ,
);

// response interceptor
service.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);


export default service;
