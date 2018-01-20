import React, { Component } from 'react';

const superagent = require('superagent');

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onBtnClick(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    if (this.state.login && this.state.password) {
      this.props.authUser({ login: this.state.login, password: this.state.password });
    }
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearAlert();
    this.props.logoutUser();
  }
  render() {
    const { login, password, submitted } = this.state;
    if (this.props.isLoggedIn) {
      return (
        <div>
          {('type' in this.props.alert) && <div className={`alert ${this.props.alert.type}`}>{this.props.alert.msg}</div>}
        <ul>
          <li><b>Login:</b> {this.props.userInfo.username}</li>
          <li><b>Email:</b> {this.props.userInfo.email}</li>
        </ul>
        <button className='btn btn-default' onClick={this.onLogoutClick}>Выйти</button>
        </div>
      );
    } 
    else {
    return (
      <div>
        {('type' in this.props.alert) && <div className={`alert ${this.props.alert.type}`}>{this.props.alert.msg}</div>}
        <form id='loginform' name='loginform'>
          <div className={'form-group' + (submitted && !login ? ' has-error' : '')}>
            <label htmlFor='login'>Логин:</label>
            <input type='text' className='form-control' id='login' name='login' value={this.state.login} onChange={this.handleChange} />
            {submitted && !login && <div className='help-block'>Введите логин</div>}
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor='pass'>Пароль:</label>
            <input type='password' className='form-control' id='password' name='password' value={this.state.password} onChange={this.handleChange} />
            {submitted && !password && <div className='help-block'>Введите пароль</div>}
          </div>
          <button className='btn btn-default' onClick={this.onBtnClick}>Войти</button>
        </form>
      </div>  
    );
    }
  }
}
export default LoginForm;