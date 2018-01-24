import React, {Component} from 'react';
import Input from 'sourceDir/components/common/Input.jsx';

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
    this.confirmPassword = this.confirmPassword.bind(this);
  }

  confirmPassword() {
    if (this.state.password !== this.state.passrepeated) {
      return {isValid: false, msg: 'Пароли не совпадают'};
    }
    return {isValid: true};
  }
  onBtnClick(event) {
    event.preventDefault();
    this.setState({submitted: true});
    const isConfirmed = (this.state.password === this.state.passrepeated);
    if (this.state.login && this.state.password && isConfirmed && this.state.email) {
      this.props.regUser({login: this.state.login, password: this.state.password, email: this.state.email});
    }
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    const {
      login, password, passrepeated, email, submitted,
    } = this.state;
    return (
      <form id="signupform">
        <Input id="login" type="text" title="Логин" value={login} onFieldChange={this.handleChange} submitted={submitted} isRequired />
        <Input id="password" type="password" title="Пароль" value={password} onFieldChange={this.handleChange} submitted={submitted} isRequired />
        <Input id="passrepeated" type="password" title="Повторите пароль" value={passrepeated} onFieldChange={this.handleChange} submitted={submitted} isRequired onFieldValidation={this.confirmPassword} />
        <Input id="email" type="text" title="E-mail" value={email} onFieldChange={this.handleChange} submitted={submitted} isRequired />
        <button className="btn btn-default" onClick={this.onBtnClick}>Зарегистрироваться</button>
      </form>
    );
  }
}

export default SignupForm;