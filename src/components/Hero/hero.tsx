import React from "react";
import "./hero.css";
// import hero from "../../assets/hero.gif";
// import girl4 from "../../assets/girl4.svg";
import GirlImage from "../GirlSvg/girlsvg";
// import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Kanchan Daryanani</span>
          <br />
          Full Stack Developer
        </span>
        <p className="introPara">
          I am a skilled full stack developer with experience in both frontend
          and backend framework!
        </p>
        <a
          href="https://drive.google.com/file/d/1lIsrHzekleTx7R85FTC3rqfJUXBLdPRE/view?usp=sharing"
          target="_blank"
        >
          <button className="btn">Resume</button>
        </a>
      </div>
      {/* <img src={girl4} alt="profile" className="bg " /> */}
      <GirlImage />
    </section>
  );
};

export default Hero;
