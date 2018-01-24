import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clearAlert} from 'sourceRedux/modules/alert/alertActions.js';
import {logoutUser} from 'sourceRedux/modules/user/userActions.js';
import LogoutForm from './LogoutForm.jsx';

function mapStateToProps(state) {
  return {
    username: ('username' in state.user) ? state.user.username : 'Anonymous',
    email: ('email' in state.user) ? state.user.email : '',
  };
}
function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(logoutUser, dispatch),
    clearAlert: bindActionCreators(clearAlert, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);

