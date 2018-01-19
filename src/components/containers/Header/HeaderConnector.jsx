import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header.jsx';

function mapStateToProps(state) {
  return {
    isLoggedIn: ('username' in state.user),
    username: ('username' in state.user) ? state.user.username : 'Anonymous',
    email: ('email' in state.user) ? state.user.email : '',
  };
}
export default connect(mapStateToProps)(Header);