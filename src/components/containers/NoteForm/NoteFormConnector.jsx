import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNote, saveNote } from 'sourceRedux/modules/note/noteActions.js';
import NoteForm from './NoteForm.jsx';

function mapStateToProps(state) {
  return {
    edited: state.notes.edited,
    editedhead: (state.notes.edited >= 0) ? state.notes.fullnotelist[state.notes.edited].noteheader : '',
    editedbody: (state.notes.edited >= 0) ? state.notes.fullnotelist[state.notes.edited].notebody : '',
  };
}
function mapDispatchToProps(dispatch) {
  return {
    saveNote: bindActionCreators(saveNote, dispatch),
    addNote: bindActionCreators(addNote, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);