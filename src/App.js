import React, { Component } from 'react';
import './App.scss';
import Nav from './components/header'
import Intro from './components/intro'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Work from './components/work'
import Contact from './components/contact'
import Footer from './components/footer'



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
          <Footer />
        </Fade>
      </div>
    );
  }
}

export default App;
