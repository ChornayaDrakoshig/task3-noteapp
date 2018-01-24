import React, {Component} from 'react';
import NoteListElement from './NoteListElement.jsx';

class NotesList extends Component {
  componentDidMount() {
    this.props.getFromServer();
  }
  render() {
    if (this.props.fullnotelist !== undefined) {
      return (
        <ul id="noteslist" className="list-group">
          {
            this.props.fullnotelist.map((note, i) =>
              <NoteListElement key={note.noteheader} id={i} nhead={note.noteheader} nbody={note.notebody} act={(i === this.props.selected)} viewNote={this.props.viewNote} deleteNote={this.props.deleteNote} editNote={this.props.editNote} />)
          }
        </ul>
      );
    }
    return (<ul id="noteslist" className="list-group" />);
  }
}

export default NotesList;