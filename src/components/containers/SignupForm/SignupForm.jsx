import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      passrepeated: '',
      email: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onBtnClick(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const isConfirmed = (this.state.password === this.state.passrepeated);
    if (this.state.login && this.state.password && isConfirmed && this.state.email) {
      const xhr = new XMLHttpRequest();
      let str = '';
      let answer = {};
      const fnLogin = this.props.loginUser;
      const fnError = this.props.errorAlert;
      const fnClear = this.props.clearAlert;
      const fnSuccess = this.props.successAlert;
      const json = JSON.stringify({
        form: 'signupform',
        login: this.state.login,
        password: this.state.password,
        email: this.state.email,
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
              fnError('Пользователь с таким именем уже зарегистрирован');
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
    const {
      login, password, passrepeated, email, submitted,
    } = this.state;
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
      <form id='signupform'>
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
        <div className={'form-group' + (submitted && (!passrepeated || password !== passrepeated) ? ' has-error' : '')}>
          <label htmlFor='passrepeat'>Повторите пароль:</label>
          <input type='password' className='form-control' id='passrepeated' name='passrepeated' value={this.state.passrepeated} onChange={this.handleChange} />
          {submitted && (password !== passrepeated) && passrepeated && <div className='help-block'>Пароли не совпадают</div>}
          {submitted && !passrepeated && <div className='help-block'>Введите подстверждение пароля</div>}
        </div>
        <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
          <label htmlFor='email'>E-mail:</label>
          <input type='text' className='form-control' id='email' name='email' value={this.state.email} onChange={this.handleChange} />
          {submitted && !email && <div className='help-block'>Введите E-mail</div>}
        </div>
        <button className='btn btn-default' onClick={this.onBtnClick}>Зарегистрироваться</button>
      </form>
    );
  }
}
}
SignupForm.propTypes = {
  loginUser: PropTypes.func,
  errorAlert: PropTypes.func,
  clearAlert: PropTypes.func,
};

export default SignupForm;