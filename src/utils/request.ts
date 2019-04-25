import axios from 'axios';

const service = axios.create({
  timeout: 30000,
});

// request 拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 304) {
      const { data } = response;
      return data;
    }
    console.error('请求错误', response.statusText, response.statusText);
    return Promise.reject('error');
  },
  error => {
    console.error(error.message);
    return Promise.reject(error);
  },
);

export default service.request;
