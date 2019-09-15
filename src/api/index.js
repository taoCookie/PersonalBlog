import {
  baseURL,
  URLS
} from './config';
import axios from 'axios';

const API = {};

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Object.keys(URLS).forEach(function (key) {
  API[key] = data => {
    data = URLS[key].method === 'get' ? {
      params: data
    } : data;
    return axios[URLS[key].method](baseURL + URLS[key].url, data);
  }
});

export default API;
