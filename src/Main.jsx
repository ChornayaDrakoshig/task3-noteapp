import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotesPage from 'sourceReactNotes/NotesPage.jsx';
import LoginPage from 'sourceReactUsers/LoginPage.jsx';
import SignupPage from 'sourceReactUsers/SignupPage.jsx';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path='/' component={NotesPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignupPage}/>
            </Switch>    
      </main>
    );
  }
}

export default Main;