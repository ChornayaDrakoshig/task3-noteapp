import React, { Component } from 'react';
import NoteForm from './react/NoteForm';
import NoteListElement from './react/NoteListElement';
import NotesList from './react/NotesList';

class App extends Component {
  render() {
  ///// временно пока нет redux
  const selected = 1;
  const fullnotelist = [
    {nhead: "Заголовок 1",
     nbody: "Тело 1"},
    {nhead: "Заголовок 2",
     nbody: "Тело 2"},
    {nhead: "Заголовок 3",
     nbody: "Тело 3"}
];

for (var i=0;i<fullnotelist.length;i++){
  fullnotelist[i].id=i;
  fullnotelist[i].act= i==selected ? true : false;
}

const listItems = fullnotelist.map((fullnotelist) =>
  <NoteListElement id={fullnotelist.id} nhead={fullnotelist.nhead} nbody={fullnotelist.nbody} act={fullnotelist.act} />
);
      
    return (
      <div id="app">
        <div class="col-sm-5" id="notesformwrap">
          <NoteForm id={fullnotelist[selected].id} nhead={fullnotelist[selected].nhead} nbody={fullnotelist[selected].nbody} stat={false}  />
        </div>
        <div class="col-sm-7" id="noteslistwrap">
          <NotesList selct={selected} notes={fullnotelist}/>    
        </div>
      </div>
    );
  }
}

export default App;
