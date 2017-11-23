import React from 'react';
import * as pageActions from '../redux/actions';

class NoteListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      noteheader: this.props.nhead,
      notebody: this.props.nbody,
      active: this.props.act
    };
 //   this.openNote = this.openNote.bind(this);    
    this.onEditBtnClick = this.onEditBtnClick.bind(this);       
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);       
    this.onOpenBtnClick = this.onOpenBtnClick.bind(this);         
  }    
  onOpenBtnClick(e) { 
    pageActions.viewNote(this.state.id);
  }
  onEditBtnClick(e) { 
    pageActions.editNote(this.state.id);
  }
  onDeleteBtnClick(e) { 
    pageActions.deleteNote(this.state.id);
  }
          
  render() {
    return (
      <li id={"note"+this.state.id} className={this.state.active ? "list-group-item active" : "list-group-item"}>
        <span onClick={this.onOpenBtnClick} >{this.state.noteheader}</span>
        <div className="button-block">
          <button type="button" className="btn btn-default btn-xs" onClick={this.onEditBtnClick}>Редактировать</button>
          <button type="button" className="btn btn-default btn-xs" onClick={this.onDeleteBtnClick}>Удалить</button>
        </div>
        {this.state.active && <div className='panel panel-default'><div className='panel-body' >{this.state.notebody}</div></div>}
      </li>
    )
  }
}

export default NoteListElement;