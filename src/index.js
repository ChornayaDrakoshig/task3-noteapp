import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import noteReducer from './redux/noteReducer';

//import getNotes from './getNotes';
//var note = getNotes((err, nstamp) => (nstamp));
/*
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8001');
socket.on("connect", function () {
    console.log("Connected!");
});

socket.on("tweet", function(tweet) {
    // todo: add the tweet as a DOM node

    console.log("tweet from", tweet.username);
    console.log("contents:", tweet.text);
});
*/

var store = createStore(noteReducer,{
  fullnotelist: [
    {noteheader: "Заголовок 1", notebody:"Тело 1"},
    {noteheader: "Заголовок 2", notebody:"Тело 2"},
    {noteheader: "Заголовок 3", notebody:"Тело 3"},
    {noteheader: "Заголовок 4", notebody:"Тело 4"},
    {noteheader: "Заголовок 5", notebody:"Тело 5"},  
    {noteheader: "Заголовок 6", notebody:"Тело 6"}],
  selected: 2,edited: -1,
});

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </ Provider>,
  document.getElementById('root')
);