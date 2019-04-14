import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from './components/header'
import Intro from './components/intro'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro />
        {/* <div className="App">
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
            <i className="fa fa-thumbs-up"></i>
            </a>
          </header>
        </div> */}
      </div>
    );
  }
}

export default App;
