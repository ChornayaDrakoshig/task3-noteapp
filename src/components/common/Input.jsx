import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._validation = this._validation.bind(this);
  }
  _handleChange(e) {
    if (this.props.onFieldChange) {
      this.props.onFieldChange(e);
    }
  }
  _validation() {
    let answer = {isValid: true};
    if (this.props.submitted) {
      if (this.props.onFieldValidation) {
        answer = this.props.onFieldValidation();
      }
      if (answer.isValid) {
        if (!this.props.value && this.props.isRequired) answer = {isValid: false, msg: 'Это обязательное поле'};
      }
    }
    return answer;
  }

  render() {
    const validation = this._validation();
    return (
      <div className={`form-group ${!validation.isValid ? ' has-error' : ''}`}>
        <label htmlFor={this.props.id}>
          {`${this.props.title}:`}
          <input type={this.props.type} className="form-control" id={this.props.id} name={this.props.id} value={this.props.value} onChange={this._handleChange} />
        </label>
        {!validation.isValid && <div className="help-block">{validation.msg}</div>}
      </div>
    );
  }
}
export default Input;