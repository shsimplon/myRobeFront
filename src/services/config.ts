import store from 'app/store/store';
import axios from 'axios';
import { login } from 'features/user.slice';

const http = axios.create({
  // baseURL: `http://51.75.121.173:8080`,
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});
//intercepte toutes les requettes axios
http.interceptors.request.use(request => {
  const state = store.getState();
  if (request.headers) {
    request.headers[
      'Authorization'
    ] = `Bearer ${state.user.user?.access_token}`;
    request.headers['Access-Control-Allow-Methods'] =
      'POST, GET, OPTIONS, PUT, DELETE';
    request.headers['Access-Control-Allow-Headers'] =
      'Origin, Content-Type, Accept, Authorization, X-Request-With';
    request.headers['Access-Control-Allow-Origin'] = '*';
  }
  return request;
});

http.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    try {
      const response = await http.get('/user/auth/refresh');
      console.log('response', response.data);
      store.dispatch(login(response.data));
      error.hasRefreshedTocken = true;
      return Promise.reject(error);
    } catch (error) {
      const tokenError = new Error('Cannot refresh token');
      return Promise.reject(tokenError);
    }
  },
);

export default http;
