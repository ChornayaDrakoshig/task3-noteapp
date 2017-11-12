import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import noteReducer from './redux/noteReducer';
import {addNote, saveNote, deleteNote, viewNote, editNote} from './redux/actions';
//import registerServiceWorker from './registerServiceWorker';

var store = createStore(noteReducer);

store.dispatch(addNote("Заголовок 1", "Тело 1"));
store.dispatch(addNote("Заголовок 2", "Тело 2"));
store.dispatch(addNote("Заголовок 3", "Тело 3"));
store.dispatch(viewNote(1));
store.dispatch(editNote(2));

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </ Provider>,
  document.getElementById('root')
)


//ReactDOM.render(<App />, document.getElementById('root'));

