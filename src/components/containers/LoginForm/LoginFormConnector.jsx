import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authUser} from 'sourceRedux/modules/user/userActions.js';
import LoginForm from './LoginForm.jsx';

function mapStateToProps(state) {
  return {
    isLoggedIn: ('username' in state.user),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    authUser: bindActionCreators(authUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);