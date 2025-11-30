// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'; // (Note: check your capitalization, file might be 'home')
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio'; // If you have this file
import Qualification from './components/Qualification';
import Connect from './components/Connect';
import BackgroundLayout from './components/backgroungLayout';
import Footer from './components/Footer';


function App() {
  return (
    <BackgroundLayout>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* WE STACK THE COMPONENTS HERE 
         id="name" is what the Navbar looks for to scroll down.
      */}

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      {/* Uncomment if you have Portfolio component ready
      <section id="portfolio">
        <Portfolio />
      </section> 
      */}

      <section id="qualification">
        <Qualification />
      </section>

      <section id="connect">
        <Connect />
      </section>

      <section id="footer">
        <Footer />
      </section>

    </BackgroundLayout>
  );
}

export default App;