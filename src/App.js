import React, { Component } from 'react';
import NoteForm from './react/NoteForm';
import NotesList from './react/NotesList';
import {addNote, saveNote, deleteNote, viewNote, editNote} from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    ////// store не видит, ???    
      fullnotelist: this.props.store.getState().fullnotelist,
      selected: this.props.store.getState().selected,
      edited: this.props.store.getState().edited
    };
  }    
  render() {
  console.log(this.props.store.getState());
  const selected = 1;
  const fullnotelist = [
    {nhead: "Заголовок 1",
     nbody: "Тело 1"},
    {nhead: "Заголовок 2",
     nbody: "Тело 2"},
    {nhead: "Заголовок 3",
     nbody: "Тело 3"}
];    
    return (
      <div id="app"> 
        <div className="col-sm-5" id="notesformwrap">
          <NoteForm id={this.state.fullnotelist[this.state.edited].id} nhead={this.state.fullnotelist[this.state.edited].nhead} nbody={this.state.fullnotelist[this.state.edited].nbody} stat={false}  />
        </div>
        <div className="col-sm-7" id="noteslistwrap">
          <NotesList selct={selected} notes={fullnotelist}/>    
        </div>
      </div>
    );
  }
}

export default App;