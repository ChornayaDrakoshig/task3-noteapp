import {noteConstants} from './noteConstants.js';

const superagent = require('superagent');

export const addNote = (head, body) => ({
  type: noteConstants.ADD,
  nhead: head,
  nbody: body,
});

export const saveNote = (head, body, i) => ({
  type: noteConstants.SAVE,
  nhead: head,
  nbody: body,
  id: i,
});

export const deleteNote = (i) => ({
  type: noteConstants.DELETE,
  id: i,
});

export const viewNote = (i) => ({
  type: noteConstants.VIEW,
  id: i,
});

export const editNote = (i) => ({
  type: noteConstants.EDIT,
  id: i,
});

export const serverRequest = () => ({
  type: noteConstants.WAITING,
});

export const getFromServer = () => {
  return dispatch => {
    dispatch(serverRequest());
    superagent
      .get('http://localhost:8079/')
      .set('Accept', 'application/json')
      .send({form: 'noteslist'})
      .end((err, res) => {
        if (!err) {
          if (res.text !== '' && res.text[0] === '[') {
            const notes = JSON.parse(res.text);
            for (let i = 0; i < notes.length; i += 1) {
              dispatch(addNote(notes[i].header, notes[i].body));
            }
          }
        }
      });
  };
};