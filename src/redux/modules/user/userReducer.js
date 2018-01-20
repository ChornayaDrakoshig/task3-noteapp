import { userConstants } from './userConstants.js';

const initialState = {};

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST: return {};
    case userConstants.LOGIN: return { username: action.username, email: action.email };
    case userConstants.LOGOUT: return {};
    case userConstants.LOGIN_SUCCESS: return { username: action.username, email: action.email };
    case userConstants.LOGIN_FAILURE: return {};
    default: return state;
  }
}
export default user;