import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from 'sourceDir/components/containers/SignupForm/SignupFormConnector.jsx';

class SignupPage extends Component {
  render() {
    return (
      <div>
        <div className='panel-group'>
          <div className='panel panel-default userforms'>
            <div className='panel-heading'>Регистрация</div>
            <div className='panel-body'>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignupPage;