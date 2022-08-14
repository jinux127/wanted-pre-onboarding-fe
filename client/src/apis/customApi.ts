import axios, { AxiosError } from 'axios';
import { IError } from '../types/api';
import { LOGIN_ERROR_MESSAGE } from '../utils/constants';
import { logoutTodo } from '../utils/util';

export const customAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

customAxios.interceptors.request.use((config) => {
  // config.withCredentials = true;
  const token = localStorage.getItem('token');
  if (token) {
    if (window.location.pathname === '/' || window.location.pathname === '/register') window.location.href = '/todo';
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

customAxios.defaults.timeout = 5000;

customAxios.interceptors.response.use(
  (response) => response,
  (error: IError) => {
    console.log(window.location.pathname);
    if (
      error.response.data.message === LOGIN_ERROR_MESSAGE &&
      !(window.location.pathname === '/' || window.location.pathname === '/register')
    ) {
      logoutTodo();
      alert('접근 권한이 없습니다. 로그인 화면으로 이동합니다.');
      window.location.href = '/';
      return Promise.reject(error);
    }
    return Promise.reject(error.response.data.message);
  }
);
