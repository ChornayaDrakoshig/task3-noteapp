import React, { Component } from 'react';
import Header from 'sourceDir/components/containers/Header/HeaderConnector.jsx';
import Main from 'sourceDir/components/pages/Main.jsx';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Header />
        <Main />    
      </div>
    );
  }
}

export default App;