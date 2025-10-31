import React from 'react';
import Styles from './service.module.css';
import pen from '../assets/Vector.png';
import cam from '../assets/camera.png';

const Service = () => {
  return (
    <div id='services' data-aos="fade-up" className={Styles.container}>
      <h1 >Services</h1>
      <div className={Styles.servicesBox}>
        <div className={Styles.card}>
            <div className={Styles.icon}>
                <img src={pen} alt="pen" />
            </div>
          <h2>Graphic Design</h2>
          <p>
            I create visually appealing designs, logos, and branding materials
            that help businesses stand out and communicate their message clearly.
          </p>
        </div>

        <div className={Styles.card}>
            <div className={Styles.icon}>
                <img src={cam} alt="cam" />
            </div>
          <h2>Photo Editing & Photography</h2>
          <p>
            From capturing stunning photos to professional retouching and color
            correction — I deliver high-quality visuals that tell a story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
