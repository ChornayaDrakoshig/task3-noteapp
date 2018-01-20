import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { errorAlert, clearAlert, successAlert } from 'sourceRedux/modules/alert/alertActions.js';
import { loginUser, logoutUser, authUser } from 'sourceRedux/modules/user/userActions.js';
import LoginForm from './LoginForm.jsx';

function mapStateToProps(state) {
  return {
    alert: ('type' in state.alert) ? { type: state.alert.type, msg: state.alert.message } : {},
    isLoggedIn: ('username' in state.user),
    userInfo: ('username' in state.user) ? { username: state.user.username, email: state.user.email } : {},
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
    logoutUser: bindActionCreators(logoutUser, dispatch),
    authUser: bindActionCreators(authUser, dispatch),
    successAlert: bindActionCreators(successAlert,dispatch),
    errorAlert: bindActionCreators(errorAlert, dispatch),
    clearAlert: bindActionCreators(clearAlert, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);