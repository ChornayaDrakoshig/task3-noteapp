export function noteReducer(state, action) {
  if (state === undefined) {
    state = { fullnotelist: [], selected: -1, edited: -1 };
  }
  let newlist = [];
  let newsel = -1;
  let newed = -1;
  switch (action.type) {
    case 'ADD_NOTE':
      newlist = state.fullnotelist.concat([{ noteheader: action.nhead, notebody: action.nbody }]);
      return ({ fullnotelist: newlist, selected: newlist.length - 1, edited: -1 });
    case 'SAVE_NOTE':
      newlist = state.fullnotelist;
      newlist[action.id] = { noteheader: action.nhead, notebody: action.nbody};
      return ({ fullnotelist: newlist, selected: action.id, edited: -1 });
    case 'DELETE_NOTE':
      if (state.selected < action.id) newsel = state.selected
      else if (state.selected > action.id) newsel = state.selected - 1;
      if (state.edited < action.id) newed = state.edited
      else if (state.edited > action.id) newed = state.edited - 1;
      newlist = state.fullnotelist;
      newlist.splice(action.id, 1);
      return ({ fullnotelist: newlist, selected: newsel, edited: newed });
    case 'VIEW_NOTE':
      return ({ fullnotelist: state.fullnotelist, selected: ((action.id !== state.selected) ? action.id : -1), edited: state.edited });
    case 'EDIT_NOTE':
      return ({ fullnotelist: state.fullnotelist, selected: action.id, edited: action.id });
    default: return state;
  }
}
export default noteReducer;