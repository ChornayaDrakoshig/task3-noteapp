import React from 'react';

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
  }    
/* openNote(act) { 
    this.setState({
      active: act 
    });
  }*/
  render() {
    return (
      <li id={"note"+this.state.id} className={this.state.active ? "list-group-item active" : "list-group-item"}>
        <span >{this.state.noteheader}</span>
        <div className="button-block">
          <button type="button" className="btn btn-default btn-xs">Редактировать</button>
          <button type="button" className="btn btn-default btn-xs">Удалить</button>
        </div>
        {this.state.active && <div className='panel panel-default'><div className='panel-body'>{this.state.notebody}</div></div>}
      </li>
    )
  }
}

export default NoteListElement;