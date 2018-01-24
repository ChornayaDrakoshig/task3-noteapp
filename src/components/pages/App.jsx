import React from 'react';
import Header from 'sourceDir/components/containers/Header/HeaderConnector.jsx';
import Main from 'sourceDir/components/pages/Main.jsx';

function App(props) {
  return (
    <div id="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;