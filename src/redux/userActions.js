export const loginUser = (userInfo) => ({
  type: 'USER_LOGIN',
  username: userInfo.username,
  email: userInfo.email,
});

export const logoutUser = () => ({
  type: 'USER_LOGOUT',
});