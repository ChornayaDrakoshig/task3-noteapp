import { combineReducers } from 'redux';
import { notes } from './noteReducer';
import { alert } from './alertReducer';
import { user } from './userReducer';

export default combineReducers({
  notes,
  alert,
  user,
});