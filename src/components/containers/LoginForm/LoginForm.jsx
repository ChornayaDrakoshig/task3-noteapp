import React, {Component} from 'react';
import Input from 'sourceDir/components/common/Input.jsx';

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
    this.setState({submitted: true});
    if (this.state.login && this.state.password) {
      this.props.authUser({login: this.state.login, password: this.state.password});
    }
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }
  render() {
    const {login, password, submitted} = this.state;
    return (
      <div>
        <form id="loginform" name="loginform">
          <Input id="login" type="text" title="Логин" value={login} onFieldChange={this.handleChange} submitted={submitted} helperOnEmpty="Введите логин" />
          <Input id="password" type="password" title="Пароль" value={password} onFieldChange={this.handleChange} submitted={submitted} helperOnEmpty="Введите пароль" />
          <button className="btn btn-default" onClick={this.onBtnClick}>Войти</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;