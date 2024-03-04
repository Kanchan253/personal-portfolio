import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-details">
          <div className="about-heading">
            <h1>Hi there! </h1>
            <h6>Its a pleasure to virtually meet you!!</h6>
          </div>
          <p>
            I am a full stack developer and a designer with a passion for
            learning and teaching. I love working with new technologies and am
            always looking for opportunities to learn and grow. I have
            experience working with a variety of different languages and
            frameworks and am always looking for opportunities to learn and
            grow. In the realm of design, I'm far from the traditional artist
            hunched over an Illustrator board. My playground is the stylesheet,
            where I adjust font sizes and finesse layouts. I enjoy creating
            captivating user experiences and intuitive interfaces.
          </p>
          <div className="social-media d-flex ">
            <a
              href="https://www.linkedin.com/in/kanchan-daryanani/"
              className="me-3"
            >
              LI
            </a>
            <a href="https://github.com/Kanchan253" className="me-3">
              GH
            </a>
            <a href="kanchandaryanani253@gmail.com">ML</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
