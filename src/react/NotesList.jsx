import React from 'react';
import NoteListElement from './NoteListElement';
import * as pageActions from '../redux/actions';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      notes: this.props.noteslist,
      selected: this.props.selected
    };
  }   
  render() {
    console.log(this.state.notes);    
    return (
      <ul id="noteslist" className="list-group">
        {this.state.notes.map((note, i) =>
          <NoteListElement key={i} id={i} nhead={note.noteheader} nbody={note.notebody} act={(i === this.state.selected) ? true : false} viewNote={this.props.viewNote} deleteNote={this.props.deleteNote} editNote={this.props.editNote}/>
        )}
      </ul>    
    )   
  }
}
export default NotesList; 