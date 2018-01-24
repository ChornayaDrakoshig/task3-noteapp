import {alertConstants} from './alertConstants.js';

const initialState = {};

export function alert(state = initialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS: return {type: 'alert-success', message: action.msg};
    case alertConstants.ERROR: return {type: 'alert-danger', message: action.msg};
    case alertConstants.CLEAR: return {};
    default: return state;
  }
}
export default alert;