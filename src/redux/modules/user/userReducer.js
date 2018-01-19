import { userConstants } from './userConstants.js';

const initialState = {};

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN: return { username: action.username, email: action.email };
    case userConstants.LOGOUT: return {};
    default: return state;
  }
}
export default user;