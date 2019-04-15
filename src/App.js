import React, { Component } from 'react';
import './App.scss';
import Nav from './components/header'
import Intro from './components/intro'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Work from './components/work'
import Contact from './components/contact'



import Fade from 'react-reveal/Fade'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro />
        <Fade bottom>
          <AboutMe />
          <Skills />
        </Fade>
        <Work />
        <Fade bottom>
          <Contact />
        </Fade>
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
