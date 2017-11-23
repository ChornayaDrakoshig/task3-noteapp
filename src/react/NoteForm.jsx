import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as pageActions from '../redux/actions';

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
    this.onBtnClick = this.onBtnClick.bind(this); 
  }
    
 handleChangeHeader(event) {
    console.log(event.target.value);
    this.setState({nodeheader: event.target.value});
    console.log(this.state.noteheader);     
  }
  handleChangeText(event) {
    this.setState({nodebody: event.target.value});
  }    
  onBtnClick(){
    if (this.state.stat === true) pageActions.addNote(this.state.noteheader,this.state.notebody)  
      else pageActions.saveNote(this.state.noteheader,this.state.notebody,this.state.id);
  }    
  render() { 
    return (
    <form id="noteform">
      <div className="form-group">
        <input type="text" className="form-control" id="notehead-form" value={this.state.noteheader} onChange={this.handleChangeHeader}  />
      </div>
      <div className="form-group">
        <textarea className="form-control" rows="5" id="notebody-form" value={this.state.notebody} onChange={this.handleChangeText} />
      </div>
      <button type="submit" className="btn btn-default" onClick={this.onBtnClick}>{this.state.stat ? "Добавить" : "Сохранить"}</button>
    </form>)  
  }
}

function mapStateToProps (state) {
  if (state.edited > -1) return {
      id: state.fullnotelist[state.edited].id,
      nhead: state.fullnotelist[state.edited].nhead,
      nbody: state.fullnotelist[state.edited].nbody,
      stat: false
    }    
  else return{
    id: -1,
    nhead: "",
    nbody: "", 
    stat: true  
  }    
}


function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);