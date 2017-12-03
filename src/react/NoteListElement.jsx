import React from 'react';

class NoteListElement extends React.Component {
  constructor(props) {
    super(props);
    this.onEditBtnClick = this.onEditBtnClick.bind(this);       
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);       
    this.onOpenBtnClick = this.onOpenBtnClick.bind(this);         
  }    
  onOpenBtnClick(e) { 
    this.props.viewNote(this.props.id);
  }
  onEditBtnClick(e) {  
    this.props.editNote(this.props.id); 
  }
  onDeleteBtnClick(e) { 
    this.props.deleteNote(this.props.id);  
  }    
  render() {
    return (
      <li id={"note"+this.props.id} className={this.props.act ? "list-group-item active" : "list-group-item"}>
        <span onClick={this.onOpenBtnClick} >{this.props.nhead}</span>
        <div className="button-block">
          <button type="button" className="btn btn-default btn-xs" onClick={this.onEditBtnClick}>Редактировать</button>
          <button type="button" className="btn btn-default btn-xs" onClick={this.onDeleteBtnClick}>Удалить</button>
        </div>
        {this.props.act && <div className='panel panel-default'><div className='panel-body' >{this.props.nbody}</div></div>}
      </li>
    )
  }
}
export default NoteListElement;