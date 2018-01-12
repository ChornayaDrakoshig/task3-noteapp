import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearAlert } from 'sourceRedux/alertActions.js';
import { logout } from 'sourceRedux/userActions.js';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearAlert();
    this.props.logout();
  }
  render() {
    return (
      <div>
        Вы уже вошли как пользователь:
        <ul>
          <li><b>Login:</b> {this.props.username}</li>
          <li><b>Email:</b> {this.props.email}</li>
        </ul>
        <button className='btn btn-default' onClick={this.onLogoutClick}>Выйти</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    username: ('username' in state.user) ? state.user.username : 'Anonymous',
    email: ('email' in state.user) ? state.user.email : '',
  };
}
function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(logout, dispatch),
    clearAlert: bindActionCreators(clearAlert, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);