import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import noteReducer from './redux/noteReducer';
import {addNote, saveNote, deleteNote, viewNote, editNote} from './redux/actions';

var store = createStore(noteReducer,{
  fullnotelist: [
    {noteheader: "Заголовок 1", notebody:"Тело 1"},
    {noteheader:"Заголовок 2", notebody:"Тело 2"},
    {noteheader:"Заголовок 3", notebody:"Тело 3"}],
  selected: 2,edited: 0,
});

ReactDOM.render(
  <Provider store={store}>
    <App  store={store}/>
  </ Provider>,
  document.getElementById('root')
)