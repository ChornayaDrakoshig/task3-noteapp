import React, { Component } from 'react';
import NoteForm from 'sourceReact/NoteForm.jsx';
import NotesList from 'sourceReact/NotesList.jsx';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="col-sm-5" id="notesformwrap">
          <NoteForm />
        </div>
        <div className="col-sm-7" id="noteslistwrap">
          <NotesList />
        </div>
      </div>
    );
  }
}

export default App;