// About.tsx

import React from "react";
import { motion } from "framer-motion";

import "./about.css";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      id="about"
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="about-details">
          <div className="about-heading">
            <h1>Hi there! </h1>
            <h6>It's a pleasure to virtually meet you!!</h6>
          </div>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            I am a full stack developer and a designer with a passion for
            learning and teaching. I have experience working with a variety of
            different languages and frameworks and am always looking for
            opportunities to learn and grow. I've worked with most of the
            popular frameworks as a junior developer and freelancer. I
            specialize in creating interactive experiences, functional
            interfaces, and secure & scalable backends. I am a bachelor's in
            computer applications and pursuing masters in the same. I love
            adopting and working with the latest web technologies. In the realm
            of design, I'm far from the traditional artist hunched over an
            Illustrator board. My playground is the stylesheet, where I adjust
            font sizes and finesse layouts. I enjoy creating captivating user
            experiences and intuitive interfaces.
          </motion.p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/kanchan-daryanani/"
              className="me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              LI
            </a>
            <a
              href="https://github.com/Kanchan253"
              className="me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              GH
            </a>
            <a
              href="mailto:kanchandaryanani253@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ML
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
