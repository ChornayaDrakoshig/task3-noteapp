export function noteReducer(state, action) {
  if (state === undefined) {
    state = {fullnotelist: [],selected: -1,edited: -1};
  }
  switch (action.type){
      case 'ADD_NOTE': 
        var newlist = state.fullnotelist.concat([{noteheader: action.nhead,  notebody: action.nbody}]); 
        return ({fullnotelist: newlist,selected: newlist.length-1, edited: -1}); 
      case 'SAVE_NOTE': 
        var newlist = state.fullnotelist;
        newlist[action.id]={ noteheader: action.nhead,  notebody: action.nbody};
        return ({fullnotelist: newlist,selected: action.id, edited: -1});
      case 'DELETE_NOTE': 
        console.log(action.id);  
        var newed = (state.edited === action.id) ? -1 : state.edited;  
        var newlist = state.fullnotelist;
        newlist.splice(action.id,1);   
        return ({fullnotelist: newlist, selected: 0, edited: newed});
      case 'VIEW_NOTE': 
        return ({fullnotelist: state.fullnotelist, selected: action.id, edited: state.edited});
      case 'EDIT_NOTE': 
        return ({fullnotelist: state.fullnotelist, selected: action.id, edited: action.id});
      default: return state;      
  }
}
export default noteReducer;