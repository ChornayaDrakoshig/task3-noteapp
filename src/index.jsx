import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from 'sourceDir/App.jsx';
import noteReducer from 'sourceRedux/noteReducer.js';
import { addNote, viewNote, editNote } from 'sourceRedux/actions2.js';

const store = createStore(noteReducer);

let str = '';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8079/', true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) return;
  if (xhr.status === 200) {
    str = xhr.responseText;
    if (str !== '') {
      const req = str.split('&');
      const notes = req[0].split(',');
      for (let i = 0; i < notes.length / 2; i++) {
        store.dispatch(addNote(notes[2 * i], notes[(2 * i) + 1]));
      }    
      store.dispatch(viewNote(parseInt(req[1], 10)));
    }
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

