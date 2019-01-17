import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LandingZone from './components/LandingZone';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
      <LandingZone></LandingZone>
      <div className="container">
      <SignUp></SignUp>
      </div>
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
