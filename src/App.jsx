
import './App.css'
import Hero from './components/Hero'
import LogoImage from './assets/Logo.png' 
import About from './components/About'
import profile from './assets/profile.jpg'
function App() {
 

  return (
    <>
     <Hero Logo={LogoImage}/>
     <About profile={profile}/>
    </>
  )
}

export default App
