export const successAlert = (message) => ({
  type: 'ALERT_SUCCESS',
  msg: message,
});

export const errorAlert = (message) => ({
  type: 'ALERT_ERROR',
  msg: message,
});

export const clearAlert = () => ({
  type: 'ALERT_CLEAR',
});