import React, { Component } from 'react';
import NoteForm from 'sourceReactNotes/NoteForm.jsx';
import NotesList from 'sourceReactNotes/NotesList.jsx';

class NotesPage extends Component {
  render() {
    return (
      <div id='notesapp'>
        <div className='col-sm-5' id='notesformwrap'>
          <NoteForm />
        </div>
        <div className='col-sm-7' id='noteslistwrap'>
          <NotesList />
        </div>
      </div>
    );
  }
}

export default NotesPage;