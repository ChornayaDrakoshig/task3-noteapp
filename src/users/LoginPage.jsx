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
    event.preventDefault();
let str = '';
const xhr = new XMLHttpRequest();
let login = 'Cmok';
let pass = 'zzzzzz';
let params = '?login=' + encodeURIComponent(login) +
  '&password=' + encodeURIComponent(pass);

xhr.open('GET', 'http://localhost:8079/'+params, true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) return;
  if (xhr.status === 200) {
    str = xhr.responseText;
    if (str !== '') {
      console.log("server answered");
    }
  }
};
      
    /*const head = this.state.note.noteheader;
    const body = this.state.note.notebody;
    this.setState({ note: { noteheader: '', notebody: '' } });
    if (this.props.edited < 0) this.props.addNote(head, body);
    else this.props.saveNote(head, body, this.props.edited);*/
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
            <form id='noteform'>
              <div className='form-group'>
                <label for="login">Логин:</label>
                <input type='text' className='form-control' id='login' value={this.state.login} onChange={this.handleChangeLogin} />
              </div>
              <div className='form-group'>
                <label for="pass">Пароль:</label>
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