import React from "react";
import Styles from "./about.module.css";
const About = (props) => {
  return (
    <div data-aos="fade-up" >
      <div id="about" className={Styles.about}>
        <div className={Styles.text}>
        <h1 >About Me</h1>
          I have over five years of experience in the media industry, with a
          strong background in DVC shoots, short films, music videos, and
          documentaries. My expertise also extends to freelance projects,
          including graphic design, video editing, sound design, and photography
          — consistently delivering high-quality, creative results.
          <br />
          <br />
          My creative journey has been one of continuous growth and exploration.
          I’ve successfully worked on digital video commercials, music videos,
          and university short films, handling direction, art direction, sound
          design, and post-production. I stay up to date with social media
          trends and innovative marketing ideas, and I’m eager to bring that
          creative energy into every project.
          <br />
          <br />
          My goal is to create impactful visual experiences, contribute to
          meaningful brand growth, and keep pushing the boundaries of
          creativity.
        </div>
        <div className={Styles.aboutphoto}>
        <img src={props.profile} alt="" />
      </div>
      </div>
      
    </div>
  );
};

export default About;
