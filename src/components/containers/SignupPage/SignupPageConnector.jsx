import {connect} from 'react-redux';
import SignupPage from './SignupPage.jsx';

function mapStateToProps(state) {
  return {
    alert: ('type' in state.alert) ? {type: state.alert.type, msg: state.alert.message} : {},
    isLoggedIn: ('username' in state.user),
  };
}

export default connect(mapStateToProps)(SignupPage);