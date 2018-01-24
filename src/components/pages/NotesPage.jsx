import React from 'react';
import NoteForm from 'sourceDir/components/containers/NoteForm/NoteFormConnector.jsx';
import NotesList from 'sourceDir/components/containers/NotesList/NotesListConnector.jsx';

function NotesPage(props) {
  return (
    <div id="notesapp">
      <div className="col-sm-5" id="notesformwrap">
        <NoteForm />
      </div>
      <div className="col-sm-7" id="noteslistwrap">
        <NotesList />
      </div>
    </div>
  );
}

export default NotesPage;