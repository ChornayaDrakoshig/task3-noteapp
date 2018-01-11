import React, { Component } from 'react';
import Header from 'sourceDir/Header.jsx';
import Main from 'sourceDir/Main.jsx';

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