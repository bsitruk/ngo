import React, { Component } from 'react';
import logo from './logo.svg';
import Project from './Project/Project.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Project src="http://www.imave.org/wp-content/uploads/logo-Qualita.jpg" title="Qualita" goal="French children meet israeli ones and play football together." 
        activity="Activity: football game in tel aviv" participant="Number of Participant: 22"/>
      </div>
    );
  }
}

export default App;
