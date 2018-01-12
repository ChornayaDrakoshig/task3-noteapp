import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm.jsx';
import UserInfo from './UserInfo.jsx';
import { successAlert, errorAlert, clearAlert } from 'sourceRedux/alertActions.js';
import { login, logout } from 'sourceRedux/userActions.js';

class LoginPage extends Component {    
  render() {
    //// исправить: если успешно, форма не рендерится, есть кнопка выйти  
    return (
      <div>
        {('type' in this.props.alert) && <div className={`alert ${this.props.alert.type}`}>{this.props.alert.msg}</div>}
        <div className='panel-group'>
          <div className='panel panel-default userforms'>
            <div className='panel-heading'>Вход</div>
            <div className='panel-body'>
              { !this.props.isLoggedIn && <LoginForm />}
              { this.props.isLoggedIn && <UserInfo />}
            </div>
          </div>
        </div>
      </div>            
    );
  }
}
function mapStateToProps(state) {
  return {
    alert: ('type' in state.alert) ? { type: state.alert.type, msg: state.alert.message } : {},
    isLoggedIn: ('username' in state.user),
  };
}
export default connect(mapStateToProps)(LoginPage);
