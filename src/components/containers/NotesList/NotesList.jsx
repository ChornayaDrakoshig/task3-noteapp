import React from 'react';
import NoteListElement from './NoteListElement.jsx';

class NotesList extends React.Component {
  render() {
    if (this.props.fullnotelist !== undefined) {
      return (
        <ul id='noteslist' className='list-group'>
          {
            this.props.fullnotelist.map((note, i) =>
            <NoteListElement key={i} id={i} nhead={note.noteheader} nbody={note.notebody} act={(i === this.props.selected)} viewNote={this.props.viewNote} deleteNote={this.props.deleteNote} editNote={this.props.editNote} />)
          }
        </ul>
      );
    }
    return (<ul id='noteslist' className='list-group' />);
  }
}

export default NotesList;