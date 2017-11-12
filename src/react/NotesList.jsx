import React from 'react';
import NoteListElement from './NoteListElement';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../redux/actions';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      fullnotelist: this.props.notes,
      selected: this.props.selct
    };
    for (var i=0;i<this.state.fullnotelist.length;i++){
        this.state.fullnotelist[i].id = i;
        this.state.fullnotelist[i].act = i === this.state.selected ? true : false;
    }
  }    
  render() {
    let notelist=this.state.fullnotelist;  
      const listItems = notelist.map((notelist) =>
  <NoteListElement id={notelist.id} nhead={notelist.nhead} nbody={notelist.nbody} act={notelist.act} />
    );    
    return (
      <ul id="noteslist" className="list-group">
        {listItems}
      </ul>    

    )
  }
}
function mapStateToProps (state) {
  return {
    notes: state.fullnotelist,
    selct: state.selected  
  }
}
function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList); 