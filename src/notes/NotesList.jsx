import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteNote, viewNote, editNote } from 'sourceRedux/noteActions.js';
import NoteListElement from './NoteListElement.jsx';

class NotesList extends React.Component {
  render() {
    if (this.props.fullnotelist !== undefined) {
      return (
        <ul id='noteslist' className='list-group'>
          {
            this.props.fullnotelist.map((note, i) =>
            <NoteListElement key={i} id={i} nhead={note.noteheader} nbody={note.notebody} act={(i === this.props.selected)} viewNote={this.props.viewNote} deleteNote={this.props.deleteNote} editNote={this.props.editNote} />)
          }
        </ul>
      );
    }
    return (<ul id='noteslist' className='list-group' />);
  }
}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);