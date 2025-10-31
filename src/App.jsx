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
function App() {
 

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
