import React, { Component } from 'react';

class LoginPage extends Component {
constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }
/*
  componentWillReceiveProps(nextProps) {
    if (this.props.editedhead !== nextProps.editedhead) {
      this.setState({
        note: {
          noteheader: nextProps.editedhead,
          notebody: nextProps.editedbody,
        },
      });
    }
  }*/
  onBtnClick(event) {
    event.preventDefault(); /// это что воообще?
    //// написать что-то дл валидации формы; или в каждом поле свое?
    //// почитать про валидацию форм вообще  
    const xhr = new XMLHttpRequest();
    let str = '';
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
          const answer = JSON.parse(str);
          if (answer.prom === 0) {
            console.log('done!');
            console.log(answer.username + ' ' + answer.email);
          } else if (answer.prom === 1) {
            console.log('no such user in system');
          } else if (answer.prom === 2) {
            console.log('wrong password');
          }
        }
      }
    };
  ///// подумать, как исп редусеры; возможно нужен тот, который изменяет стили форм? и отображает сообщения сервера      
  }
  handleChangeLogin(event) {
    this.setState({ login: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className='panel-group'>
        <div className='panel panel-default userforms'>
          <div className='panel-heading'>Вход</div>
          <div className='panel-body'>
            <form id='loginform' name='loginform'>
              <div className='form-group'>
                <label htmlFor='login'>Логин:</label>
                <input type='text' className='form-control' id='login' value={this.state.login} onChange={this.handleChangeLogin} />
              </div>
              <div className='form-group'>
                <label htmlFor='pass'>Пароль:</label>
                <input type='password' className='form-control' id='pass' value={this.state.password} onChange={this.handleChangePassword} />
              </div>
              <button className='btn btn-default' onClick={this.onBtnClick}>Войти</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;