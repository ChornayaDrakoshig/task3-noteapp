import React, { Component } from 'react';
import NoteForm from './react/NoteForm';
import NotesList from './react/NotesList';
import {addNote, saveNote, deleteNote, viewNote, editNote} from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    ////// store не видит, ???    
      fullnotelist: this.props.store.fullnotelist,
      selected: this.props.store.selected,
      edited: this.props.store.edited
    };
  }    
  render() {
  const selected = 1;
/*
this.props.store.dispatch(addNote("Заголовок 1", "Тело 1"));
this.props.store.dispatch(addNote("Заголовок 2", "Тело 2"));
this.props.store.dispatch(addNote("Заголовок 3", "Тело 3"));
this.props.store.dispatch(viewNote(1));*/
console.log("hi");      
console.log(this.props.store.getState());
  
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