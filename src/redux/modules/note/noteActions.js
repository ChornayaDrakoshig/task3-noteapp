import { noteConstants } from './noteConstants.js';

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