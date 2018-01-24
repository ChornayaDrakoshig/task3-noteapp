import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {regUser} from 'sourceRedux/modules/user/userActions.js';
import SignupForm from './SignupForm.jsx';

function mapStateToProps(state) {
  return {
    isLoggedIn: ('username' in state.user),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    regUser: bindActionCreators(regUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);