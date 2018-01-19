import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm.jsx';
import UserInfo from './UserInfo.jsx';

class SignupPage extends Component {
  render() {
    return (
      <div>
        {('type' in this.props.alert) && <div className={`alert ${this.props.alert.type}`}>{this.props.alert.msg}</div>}
        <div className='panel-group'>
          <div className='panel panel-default userforms'>
            <div className='panel-heading'>Регистрация</div>
            <div className='panel-body'>
              { !this.props.isLoggedIn && <SignupForm />}
              { this.props.isLoggedIn && <UserInfo />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SignupPage.propTypes = {
  alert: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};
function mapStateToProps(state) {
  return {
    alert: ('type' in state.alert) ? { type: state.alert.type, msg: state.alert.message } : {},
    isLoggedIn: ('username' in state.user),
  };
}
export default connect(mapStateToProps)(SignupPage);
