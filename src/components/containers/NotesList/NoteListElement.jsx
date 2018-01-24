import React from 'react';

class NoteListElement extends React.Component {
  constructor(props) {
    super(props);
    this.onEditBtnClick = this.onEditBtnClick.bind(this);
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
    this.onOpenBtnClick = this.onOpenBtnClick.bind(this);
  }
  onOpenBtnClick() {
    this.props.viewNote(this.props.id);
  }
  onEditBtnClick() {
    this.props.editNote(this.props.id);
  }
  onDeleteBtnClick() {
    this.props.deleteNote(this.props.id);
  }
  render() {
    return (
      <li id={`note${this.props.id}`} className={this.props.act ? 'list-group-item active' : 'list-group-item'}>
        <button type="button" className="btn btn-link btn-xs" onClick={this.onOpenBtnClick}>{this.props.nhead}</button>
        <div className="button-block">
          <button type="button" className="btn btn-default btn-xs" onClick={this.onEditBtnClick}>Редактировать</button>
          <button type="button" className="btn btn-default btn-xs" onClick={this.onDeleteBtnClick}>Удалить</button>
        </div>
        {this.props.act && <div className="panel panel-default"><div className="panel-body" >{this.props.nbody}</div></div>}
      </li>
    );
  }
}
export default NoteListElement;