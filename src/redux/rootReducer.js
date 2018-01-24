import {combineReducers} from 'redux';
import {notes} from './modules/note/noteReducer';
import {alert} from './modules/alert/alertReducer';
import {user} from './modules/user/userReducer';

export default combineReducers({
  notes,
  alert,
  user,
});