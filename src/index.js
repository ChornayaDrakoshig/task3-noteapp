import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import noteReducer from './redux/noteReducer';

var startStore = {};
var str="";

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8079/', false);
xhr.send();
if (xhr.status != 200) {
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  str=xhr.responseText;
}
/*
var request = require('request');
request('http://localhost:8079/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  str=body;    
      
});*/
if (str!==""){
  var req=str.split("&");
  var notes=req[0].split(",");
  var notelist=[];
  for (var i=0;i<notes.length/2;i++){
    notelist.push({noteheader: notes[2*i], notebody: notes[2*i+1]});
  } 
  startStore={
    fullnotelist: notelist,
    selected: parseInt(req[1], 10),
    edited: parseInt(req[2], 10),  
  };
console.log(startStore);
}
var store = createStore(noteReducer,startStore);





ReactDOM.render(
  <Provider store={store}>
    <App  />
  </ Provider>,
  document.getElementById('root')
);
console.log("kones");
