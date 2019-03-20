import axios from './api-config'

const logIn = (params) => {
  return axios.post(`/api/user/login`, params);
}

const logout = () => {
  return axios.post(`/api/user/logout`);
}

// 获取用户信息
const getUserInfo = () => {
  return axios.get('/api/user/info');
}

export {
  logIn,
  logout,
  getUserInfo
}