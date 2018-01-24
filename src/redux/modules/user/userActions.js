import {userConstants} from './userConstants.js';
import {successAlert, errorAlert} from 'sourceRedux/modules/alert/alertActions.js';

const superagent = require('superagent');

export const logoutUser = () => ({
  type: userConstants.LOGOUT,
});

export const loginRequest = (user) => ({
  type: userConstants.LOGIN_REQUEST,
  username: user,
});

export const loginSuccess = (userInfo) => ({
  type: userConstants.LOGIN_SUCCESS,
  username: userInfo.username,
  email: userInfo.email,
});

export const loginFailure = () => ({
  type: userConstants.LOGIN_FAILURE,
});

export const authUser = (userInfo) => {
  return dispatch => {
    dispatch(loginRequest({user: userInfo.username}));
    superagent
      .post('http://localhost:8079/')
      .set('Accept', 'application/json')
      .send({form: 'loginform', login: userInfo.login, password: userInfo.password})
      .end((err, res) => {
        if (err) {
          dispatch(loginFailure());
          dispatch(errorAlert('Ошибка на сервере'));
        } else {
          const answer = JSON.parse(res.text);

          if (answer.prom === 0) {
            dispatch(loginSuccess(answer));
            dispatch(successAlert('Вы вошли в систему'));
          } else if (answer.prom === 1) {
            dispatch(errorAlert('Пользователь с таким логином не найден'));
            dispatch(loginFailure());
          } else if (answer.prom === 2) {
            dispatch(errorAlert('Неверный пароль'));
            dispatch(loginFailure());
          }
        }
      });
  };
};

export const signupRequest = (user) => ({
  type: userConstants.SIGNUP_REQUEST,
  username: user,
});

export const signupSuccess = (userInfo) => ({
  type: userConstants.SIGNUP_SUCCESS,
  username: userInfo.username,
  email: userInfo.email,
});

export const signupFailure = () => ({
  type: userConstants.SIGNUP_FAILURE,
});

export const regUser = (userInfo) => {
  return dispatch => {
    dispatch(loginRequest({user: userInfo.username}));
    superagent
      .post('http://localhost:8079/')
      .set('Accept', 'application/json')
      .send({form: 'signupform', login: userInfo.login, password: userInfo.password, email: userInfo.email})
      .end((err, res) => {
        if (err) {
          dispatch(loginFailure());
          dispatch(errorAlert('Ошибка на сервере'));
        } else {
          const answer = JSON.parse(res.text);

          if (answer.prom === 0) {
            dispatch(signupSuccess(answer));
            dispatch(successAlert('Вы вошли в систему'));
          } else if (answer.prom === 1) {
            dispatch(errorAlert('Пользователь с таким логином уже зарегистрирован'));
          }
        }
      });
  };
};