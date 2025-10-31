import React from 'react'
import Styles from './tools.module.css'
// ../assets/ps.png import path
import ps from '../assets/ps.png'
import illu from '../assets/illustrator.png'
import canva from '../assets/canva.png'
const Tools = () => {
  return (
    <div className={Styles.toolsContainer}> 
      <h1>Tools</h1>
      <div className={Styles.logoBox}>
        <div className={Styles.logo}>
          <img src={ps} alt="Photoshop"/>
        </div>
        <div className={Styles.logo}>
          <img src={illu} alt="Photoshop"/>
        </div>
        <div className={Styles.logo}>
          <img src={canva} alt="Photoshop"/>
        </div>
      </div>
    </div>
  )
}

export default Tools
