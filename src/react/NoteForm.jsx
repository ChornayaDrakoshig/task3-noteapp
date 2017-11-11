import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      noteheader: this.props.nhead,
      notebody: this.props.nbody,
      stat: this.props.stat 
    };
    this.handleChangeHeader = this.handleChangeHeader.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  }
    
 handleChangeHeader(event) {
    console.log(event.target.value);
    this.setState({nodeheader: event.target.value});
    console.log(this.state.noteheader);     
  }
  handleChangeText(event) {
    this.setState({nodebody: event.target.value});
  }    
  handleSubmit(event) {
    alert(this.state.noteheader);
    event.preventDefault();
  }
    
  render() { /*нужен ли для redux свой onsubmit????????*/ 
    return (
    <form id="noteform" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" id="notehead-form" value={this.state.noteheader} onChange={this.handleChangeHeader}  />
      </div>
      <div className="form-group">
        <textarea class="form-control" rows="5" id="notebody-form" value={this.state.notebody} onChange={this.handleChangeText} />
      </div>
      <button type="submit" class="btn btn-default">{this.state.stat ? "Добавить" : "Сохранить"}</button>
    </form>) /* id пойдет в функцию если это сохранение*/    
  }
}

export default NoteForm; 