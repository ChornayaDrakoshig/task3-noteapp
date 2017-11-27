import React, { Component } from 'react';
import NoteForm from './react/NoteForm';
import NotesList from './react/NotesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addNote, saveNote, deleteNote, viewNote, editNote} from './redux/actions2';
//import * as pageActions from './redux/actions2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {   
      fullnotelist: this.props.fullnotelist,
      selected: this.props.selected,
      edited: this.props.edited,
      editedhead: (this.props.edited >= 0) ? this.props.fullnotelist[this.props.edited].noteheader : "",
      editedbody: (this.props.edited >= 0) ? this.props.fullnotelist[this.props.edited].notebody : ""
    };
  }    
  render() {
    return (
      <div id="app"> 
        <div className="col-sm-5" id="notesformwrap">
          <NoteForm id={this.state.edited} nhead={this.state.editedhead} nbody={this.state.editedbody} stat={(this.state.edited>=0) ? true : false} />
        </div>
        <div className="col-sm-7" id="noteslistwrap">
          <NotesList noteslist={this.state.fullnotelist} selected={this.state.selected} viewNote={this.props.viewNote} deleteNote={this.props.deleteNote} editNote={this.props.editNote}/>    
        </div>
      </div>
    ); 
  }
}
function mapStateToProps (state) {
  return {
    fullnotelist: state.fullnotelist,
    selected: state.selected,
    edited: state.edited
  }
}
function mapDispatchToProps(dispatch) {
  return {
    viewNote: bindActionCreators(viewNote, dispatch),
    deleteNote: bindActionCreators(deleteNote, dispatch),  
    editNote: bindActionCreators(deleteNote, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 