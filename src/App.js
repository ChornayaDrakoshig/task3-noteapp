import React, { Component } from 'react';
import NoteForm from './react/NoteForm';
import NotesList from './react/NotesList';

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