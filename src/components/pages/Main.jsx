import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotesPage from 'sourceDir/components/pages/NotesPage.jsx';
import LoginPage from 'sourceDir/components/pages/LoginPage.jsx';
import SignupPage from 'sourceDir/components/pages/SignupPage.jsx';

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