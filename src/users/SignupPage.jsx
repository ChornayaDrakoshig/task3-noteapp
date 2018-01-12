import React, { Component } from 'react';

class SignupPage extends Component {
constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      passrepeat: '',
      email: ''
    };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePassRep = this.handleChangePassRep.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
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
  handleChangePassRep(event) {
    this.setState({ login: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ login: event.target.value });
  }    
  render() {
    return (
      <div className='panel-group'>
        <div className='panel panel-default userforms'>
          <div className='panel-heading'>Регистрация</div>
          <div className='panel-body'>
            <form id='signupform'>
              <div className='form-group'>
                <label for="login">Логин:</label>
                <input type='text' className='form-control' id='login' value={this.state.login} onChange={this.handleChangeLogin} />
              </div>
              <div className='form-group'>
                <label for="pass">Пароль:</label>
                <input type='password' className='form-control' id='pass' value={this.state.password} onChange={this.handleChangePassword} />
              </div>
              <div className='form-group'>
                <label for="passrepeat">Повторите пароль:</label>
                <input type='password' className='form-control' id='passrepeat' value={this.state.password} onChange={this.handleChangePassword} />
              </div>
              <div className='form-group'>
                <label for="email">E-mail:</label>
                <input type='text' className='form-control' id='email' value={this.state.password} onChange={this.handleChangePassword} />
              </div>
              <button className='btn btn-default' onClick={this.onBtnClick}>Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignupPage;