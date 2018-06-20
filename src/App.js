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
        <Project src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhB6oels3yCLW6CIHxj2iY8lLrXA5ReMbWO10uc3mM23XVByB" title="ABUGOSH SOCCER GAME" goal="change the world" 
        activity="football game in tel aviv" budget="200$"/>

      </div>
    );
  }
}

export default App;
