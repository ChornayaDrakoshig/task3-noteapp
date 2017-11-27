
export const addNote = (head,body) => (dispatch) => ({
    type: 'ADD_NOTE',
    nhead: head,
    nbody: body,
});

export const saveNote = (head,body,i) => (dispatch) => ({
    type: 'SAVE_NOTE',
    nhead: head,
    nbody: body,
    id: i,
});

export const deleteNote = (i) => (dispatch) => ({
    type: 'DELETE_NOTE',
    id: i,
});

export const viewNote = (i) => (dispatch) => ({
    type: 'VIEW_NOTE',
    id: i,
});

export const editNote = (i) => (dispatch) => ({
    type: 'EDIT_NOTE',
    id: i,
});