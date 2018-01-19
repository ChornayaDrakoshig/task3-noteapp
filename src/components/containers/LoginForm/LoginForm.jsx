import React, { Component } from 'react';

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
      const xhr = new XMLHttpRequest();
      let str = '';
      let answer = {};
      const fnLogin = this.props.loginUser;
      const fnError = this.props.errorAlert;
      const fnClear = this.props.clearAlert;
      const fnSuccess = this.props.successAlert;
      const json = JSON.stringify({
        form: 'loginform',
        login: this.state.login,
        password: this.state.password,
      });
      xhr.open('POST', 'http://localhost:8079/', true);
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.send(json);
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
          str = xhr.responseText;
          if (str !== '') {
            answer = JSON.parse(str);
            if (answer.prom === 0) {
              fnLogin(answer);
              fnSuccess('Вы вошли в систему');
            } else if (answer.prom === 1) {
              fnError('Пользователь с таким логином не найден');
            } else if (answer.prom === 2) {
              fnError('Неверный пароль');
            }
          }
        }
      };
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