import React from "react";
import "./hero.css";
import { motion } from "framer-motion";
// import hero from "../../assets/hero.gif";
// import girl4 from "../../assets/girl4.svg";
import GirlImage from "../GirlSvg/girlsvg";
// import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <motion.span
          className="hello"
          initial={{ opacity: 0, y: -50 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation to apply when component mounts
          transition={{ duration: 0.5, delay: 0.2 }} // Transition duration and delay
        >
          Hello,
        </motion.span>
        <motion.span
          className="introText"
          initial={{ opacity: 0, y: -50 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation to apply when component mounts
          transition={{ duration: 0.5, delay: 0.4 }} // Transition duration and delay
        >
          I'm{" "}
          <motion.span
            className="introName "
            initial={{ opacity: 0 }} // Initial animation values
            animate={{ opacity: 1 }} // Animation to apply when component mounts
            transition={{ duration: 0.5, delay: 0.6 }} // Transition duration and delay
          >
            Kanchan Daryanani
          </motion.span>
          <br />
          Full Stack Developer & Designer
        </motion.span>
        <motion.p
          className="introPara"
          initial={{ opacity: 0, y: -50 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation to apply when component mounts
          transition={{ duration: 0.5, delay: 0.8 }} // Transition duration and delay
        >
          I am a skilled full stack developer and designer with experience in
          both frontend and backend frameworks!
        </motion.p>
        <a
          href="https://drive.google.com/file/d/1lIsrHzekleTx7R85FTC3rqfJUXBLdPRE/view?usp=sharing"
          target="_blank"
        >
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }} // Animation on hover
            initial={{ opacity: 0 }} // Initial animation values
            animate={{ opacity: 1 }} // Animation to apply when component mounts
            transition={{ duration: 0.5, delay: 1 }} // Transition duration and delay
          >
            Resume
          </motion.button>
        </a>
      </div>
      <motion.div
        className="floatingObjects"
        animate={{
          y: [0, -10, 0], // Float objects up and down
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          loop: Infinity,
        }}
      >
        {/* Add your floating objects here */}
      </motion.div>
      <GirlImage />
    </section>
  );
};

export default Hero;
// const Hero = () => {
//   return (
//     <section id="intro">
//       <div className="introContent">
//         <span className="hello">Hello,</span>
//         <span className="introText">
//           I'm <span className="introName typewriter">Kanchan Daryanani</span>
//           <br />
//           Full Stack Developer & Designer
//         </span>
//         <p className="introPara">
//           I am a skilled full stack developer and designer with experience in
//           both frontend and backend framework!
//         </p>
//         <a
//           href="https://drive.google.com/file/d/1lIsrHzekleTx7R85FTC3rqfJUXBLdPRE/view?usp=sharing"
//           target="_blank"
//         >
//           <button className="btn">Resume</button>
//         </a>
//       </div>
//       {/* <img src={girl4} alt="profile" className="bg " /> */}
//       <GirlImage />
//     </section>
//   );
// };

// export default Hero;
