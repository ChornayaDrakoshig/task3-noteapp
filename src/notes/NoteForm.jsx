import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNote, saveNote } from 'sourceRedux/noteActions.js';


class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        noteheader: this.props.editedhead,
        notebody: this.props.editedbody,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.editedhead !== nextProps.editedhead) {
      this.setState({
        note: {
          noteheader: nextProps.editedhead,
          notebody: nextProps.editedbody,
        },
      });
    }
  }
  onBtnClick(event) {
    event.preventDefault();
    const head = this.state.note.noteheader;
    const body = this.state.note.notebody;
    this.setState({ note: { noteheader: '', notebody: '' } });
    if (this.props.edited < 0) this.props.addNote(head, body);
    else this.props.saveNote(head, body, this.props.edited);
  }
  handleChange(e) {
    const { name, value } = e.target;
    const newState = {
      noteheader: this.state.note.noteheader,
      notebody: this.state.note.notebody,
    };
    newState[name] = value;
    this.setState({ note: newState });
  }
  render() {
    return (
      <form id='noteform'>
        <div className='form-group'>
          <input type='text' className='form-control' name='noteheader' id='notehead-form' value={this.state.note.noteheader} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <textarea className='form-control' rows='5' name='notebody' id='notebody-form' value={this.state.note.notebody} onChange={this.handleChange} />
        </div>
        <button className='btn btn-default' onClick={this.onBtnClick}>{(this.props.edited < 0) ? 'Добавить' : 'Сохранить'}</button>
      </form>);
  }
}


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