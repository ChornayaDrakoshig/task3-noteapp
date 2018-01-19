import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { errorAlert, clearAlert } from 'sourceRedux/alertActions.js';
import { loginUser } from 'sourceRedux/userActions.js';

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
              fnClear();
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

  render() {
    const { login, password, submitted } = this.state;
    return (
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
    );
  }
}
function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
    errorAlert: bindActionCreators(errorAlert, dispatch),
    clearAlert: bindActionCreators(clearAlert, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);