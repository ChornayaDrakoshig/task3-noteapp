import {alertConstants} from './alertConstants.js';

export const successAlert = (message) => ({
  type: alertConstants.SUCCESS,
  msg: message,
});

export const errorAlert = (message) => ({
  type: alertConstants.ERROR,
  msg: message,
});

export const clearAlert = () => ({
  type: alertConstants.CLEAR,
});