import React, { Component } from 'react';
import logo from './logo.svg';
import Student from './student';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your class</h1>
        </header>
        <div>
          < Student/>
        </div>
      </div>
    );
  }
}

export default App;
