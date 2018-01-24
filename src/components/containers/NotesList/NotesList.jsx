import React from 'react';
import NoteListElement from './NoteListElement.jsx';

function NotesList(props) {
  if (props.fullnotelist !== undefined) {
    return (
      <ul id="noteslist" className="list-group">
        {
          props.fullnotelist.map((note, i) =>
            <NoteListElement key={note.noteheader} id={i} nhead={note.noteheader} nbody={note.notebody} act={(i === props.selected)} viewNote={props.viewNote} deleteNote={props.deleteNote} editNote={props.editNote} />)
        }
      </ul>
    );
  }
  return (<ul id="noteslist" className="list-group" />);
}

export default NotesList;