import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from 'sourceDir/components/containers/LoginForm/LoginFormConnector.jsx';

class LoginPage extends Component {
  
  render() {
    return (
        <div className='panel-group'>
          <div className='panel panel-default userforms'>
            <div className='panel-heading'>Вход</div>
            <div className='panel-body'>
              <LoginForm />
            </div>
          </div>
        </div>
    );
  }
}
export default LoginPage;
