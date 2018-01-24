import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LogoutForm extends Component {
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
        Данные профиля:
        <ul>
          <li><b>Login:</b> {this.props.username}</li>
          <li><b>Email:</b> {this.props.email}</li>
        </ul>
        <button className="btn btn-default" onClick={this.onLogoutClick}>Выйти</button>
      </div>
    );
  }
}
LogoutForm.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  clearAlert: PropTypes.func,
  logout: PropTypes.func,
};
export default LogoutForm;

