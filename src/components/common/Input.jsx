import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    /*
    <Input id="" type="" title="" value="" onFieldChange="" submitted="" helperOnEmpty=""
      helperOnUnvalid="" fieldToCompare=""/>
      ?
      submited
      имя поля
      подпись поля
      значение
      обработчик
      тип
      helperOnEmpty
      helperOnUnvalid
      fieldToCompare
      */
    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(e) {
    if (this.props.onFieldChange) {
      this.props.onFieldChange(e);
    }
  }

  render() {
    const submitted = this.props.submitted;
    const id = this.props.id;
    const value = this.props.value;
    const isEmpty = submitted && !value;
    const isValid = this.props.fieldToCompare ? submitted && value && value === this.props.fieldToCompare : true;
    return (
      <div className={`form-group ${submitted && !value ? ' has-error' : ''}`}>
        <label htmlFor={id}>
          {`${this.props.title}:`}
          <input type={this.props.type} className="form-control" id={id} name={id} value={value} onChange={this._handleChange} />
        </label>
        {isEmpty && <div className="help-block">{this.props.helperOnEmpty}</div>}
        {!isValid && <div className="help-block">{this.props.helperOnUnvalid}</div>}
      </div>
    );
  }
}
export default Input;