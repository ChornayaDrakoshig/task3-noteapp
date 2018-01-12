export const login = (userInfo) => ({
  type: 'USER_LOGIN',
  username: userinfo.username,
  email: userInfo.email,
});

export const logout = () => ({
  type: 'USER_LOGOUT',
})
