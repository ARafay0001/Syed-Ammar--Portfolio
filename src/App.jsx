import React from 'react'
import Hero from './components/Hero'
import LogoImage from './assets/Logo.png' 
import About from './components/About'
import profile from './assets/profile.jpg'
import Gallery from './components/Gallery'
import Tools from './components/Tools.jsx'
import Service from './components/Service.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true,     // Whether animation should happen only once
      offset: 100,    // How far from the top before triggering animation
    });
  }, [])

  return (
    <>
     <Hero Logo={LogoImage}/>
     <About profile={profile}/>
     <Tools/>
     <Gallery/>
     <Service/>
     <Contact/>
     <Header/>
    </>
  )
}

export default App
