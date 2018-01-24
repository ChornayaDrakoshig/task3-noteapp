import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NotesPage from 'sourceDir/components/pages/NotesPage.jsx';
import LoginPage from 'sourceDir/components/containers/LoginPage/LoginPageConnector.jsx';
import SignupPage from 'sourceDir/components/containers/SignupPage/SignupPageConnector.jsx';

function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={NotesPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </main>
  );
}

export default Main;