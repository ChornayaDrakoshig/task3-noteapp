export const addNote = (head,body) => ({
    type: 'ADD_NOTE',
    nhead: head,
    nbody: body,
});

export const saveNote = (head,body,i) => ({
    type: 'SAVE_NOTE',
    nhead: head,
    nbody: body,
    id: i,
});

export const deleteNote = (i) => ({
    type: 'DELETE_NOTE',
    id: i,
});

export const viewNote = (i) => ({
    type: 'VIEW_NOTE',
    id: i,
});

export const editNote = (i) => ({
    type: 'EDIT_NOTE',
    id: i,
});