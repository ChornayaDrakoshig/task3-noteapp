import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from 'sourceDir/App.jsx';
import reducer from 'sourceRedux/rootReducer.js'
import { addNote } from 'sourceRedux/noteActions.js';

const store = createStore(reducer);

let str = '';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8079/', true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) return;
  if (xhr.status === 200) {
    str = xhr.responseText;
    if (str !== '' && str[0] === '[') {
      const notes = JSON.parse(str);
      for (let i = 0; i < notes.length; i++) {
        store.dispatch(addNote(notes[i].header, notes[i].body));
      }
    }
  }
};
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);