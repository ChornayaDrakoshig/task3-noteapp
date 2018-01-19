import { noteConstants } from './noteConstants.js';

const initialState = {
  fullnotelist: [],
  selected: -1,
  edited: -1,
};

export function notes(state = initialState, action) {
  const newState = { fullnotelist: [], selected: -1, edited: -1 };
  let newlist = [];
  let newsel = -1;
  let newed = -1;
  switch (action.type) {
    case noteConstants.ADD:
      newlist = state.fullnotelist.concat([{ noteheader: action.nhead, notebody: action.nbody }]);
      return ({ fullnotelist: newlist, selected: newlist.length - 1, edited: -1 });
    case noteConstants.SAVE:
      newlist = state.fullnotelist;
      newlist[action.id] = { noteheader: action.nhead, notebody: action.nbody };
      return ({ fullnotelist: newlist, selected: action.id, edited: -1 });
    case noteConstants.DELETE:
      if (state.selected < action.id) newsel = state.selected;
      else if (state.selected > action.id) newsel = state.selected - 1;
      if (state.edited < action.id) newed = state.edited;
      else if (state.edited > action.id) newed = state.edited - 1;
      newlist = state.fullnotelist;
      newlist.splice(action.id, 1);
      return ({ fullnotelist: newlist, selected: newsel, edited: newed });
    case noteConstants.VIEW:
      return ({
        fullnotelist: state.fullnotelist,
        selected: ((action.id !== state.selected) ? action.id : -1),
        edited: state.edited,
      });
    case noteConstants.EDIT:
      return ({ fullnotelist: state.fullnotelist, selected: action.id, edited: action.id });
    default: return newState;
  }
}
export default notes;