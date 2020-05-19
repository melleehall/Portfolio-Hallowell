import React, { Component } from 'react'

import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
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
               
            </main>
          </div>
          <div className='footer-container'>
            <footer>
              <Footer />
            </footer>
          </div>
      </div>
    );
  }
}

