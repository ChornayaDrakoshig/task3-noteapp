import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addNote, saveNote} from 'sourceRedux/actions2.js';


class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        noteheader: this.props.editedhead,
        notebody: this.props.editedbody,
      },
    };
    this.handleChangeHeader = this.handleChangeHeader.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
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
    if (this.props.edited < 0) this.props.addNote(head,body)  
    else this.props.saveNote(head,body,this.props.edited);
  }
  handleChangeHeader(event) {
    const editednote = this.state.note;
    editednote.noteheader = event.target.value;
    this.setState({ note: editednote });
  }
  handleChangeText(event) {
    const editednote = this.state.note;
    editednote.notebody = event.target.value;
    this.setState({ note: editednote });
  }
  render() {
    return (
      <form id='noteform'>
        <div className='form-group'>
          <input type='text' className='form-control' id='notehead-form' value={this.state.note.noteheader} onChange={this.handleChangeHeader} />
        </div>
        <div className='form-group'>
          <textarea className='form-control' rows='5' id='notebody-form' value={this.state.note.notebody} onChange={this.handleChangeText} />
        </div>
        <button className='btn btn-default' onClick={this.onBtnClick}>{(this.props.edited < 0) ? 'Добавить' : 'Сохранить'}</button>
      </form>);
  }
}

function mapStateToProps(state) {
  return {
    edited: state.edited,
    editedhead: (state.edited >= 0) ? state.fullnotelist[state.edited].noteheader : '',
    editedbody: (state.edited >= 0) ? state.fullnotelist[state.edited].notebody : '',
  };
}
function mapDispatchToProps(dispatch) {
  return {
    saveNote: bindActionCreators(saveNote, dispatch),
    addNote: bindActionCreators(addNote, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);