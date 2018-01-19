import { userConstants } from './userConstants.js';

export const loginUser = (userInfo) => ({
  type: userConstants.LOGIN,
  username: userInfo.username,
  email: userInfo.email,
});

export const logoutUser = () => ({
  type: userConstants.LOGOUT,
});