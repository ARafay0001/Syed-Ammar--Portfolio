import Button from "./Button";
import Styles from "./hero.module.css";
// import "../index.css"
const Hero = (props) => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.container}>
        <div className={Styles.logo}>
          <img src={props.Logo} alt="Logo" />
        </div>
      <h1>Hello, I am Syed Ammar</h1>
      <div className={Styles.tag}>
        Where imagination meets precision. Designs that leave a mark <br /> Turning ideas into stunning visuals
      </div>
      <div className={Styles.keys}>
        <Button text={"View My Work"} href={"#gallery"}/>
        <Button text={"Download CV"} download={true} href={"/syed-ammar-resume.pdf"}/>
      </div>
      <div className={Styles.triangle}>
        <a href="#about">▼</a>
      </div>
        </div>
    </div>
  );
};

export default Hero;
