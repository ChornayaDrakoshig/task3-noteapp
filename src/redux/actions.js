export function addNote(head,body)
{
  return {
    type: 'ADD_NOTE',
    nhead: head,
    nbody: body,
  };
}

export function saveNote(head,body,i)
{
  return {
    type: 'SAVE_NOTE',
    nhead: head,
    nbody: body,
    id: i  
  }
}

export function deleteNote(i)
{
  return {
    type: 'DELETE_NOTE',
    id: i  
  }
}

export function viewNote(i)
{
  return {
    type: 'VIEW_NOTE',
    id: i  
  }
}

export function editNote(i)
{
  return {
    type: 'EDIT_NOTE',
    id: i  
  }
}