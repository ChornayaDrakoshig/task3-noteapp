import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteNote, viewNote, editNote, getFromServer} from 'sourceRedux/modules/note/noteActions.js';
import NotesList from './NotesList.jsx';

function mapStateToProps(state) {
  return {
    fullnotelist: state.notes.fullnotelist,
    selected: state.notes.selected,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    viewNote: bindActionCreators(viewNote, dispatch),
    deleteNote: bindActionCreators(deleteNote, dispatch),
    editNote: bindActionCreators(editNote, dispatch),
    getFromServer: bindActionCreators(getFromServer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);