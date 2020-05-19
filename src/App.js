import React, { Component } from 'react'

import Hero from './Hero/Hero'
import IntroSection from './IntroSection/IntroSection'
import ProjectSection from './ProjectSection/ProjectSection'
import ContactSection from './ContactSection/ContactSection'
import './App.css'


export default class App extends Component {

  render() {

    return (
      <div className='app'>
        <div className='App_nav'>        
        </div>
          <div className='header-container'>
            <header>
              <Hero />
            </header>
          </div>
          <div className='main-container'>
            <main>
              <IntroSection />
              <ProjectSection />
              <ContactSection />
            </main>
          </div>
      </div>
    );
  }
}

