import React from "react";
import "./navbar.css";
import logofavicon from "../../assets/logofavicon.png";
import { motion } from "framer-motion"; 
import Logo from "../Logo/logo";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <motion.nav
      className="navbar sticky-top navbar-expand-lg"
      initial={{ opacity: 0, y: -50 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation to apply when component mounts
      transition={{ duration: 0.5 }} // Transition duration
    >
      <motion.a
        className="navbar-brand"
        href="#"
        whileHover={{ scale: 1.1 }} // Animation on hover
      >
        {/* <img
          src={logofavicon}
          alt="logo"
          className="logo navbar-brand img-fluid"
        /> */}
        <Logo />
      </motion.a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto m-1 ">
          <li className="nav-item m-1">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link desktopMenuItemList"
            >
              Home
            </Link>
          </li>
          <li className="nav-item m-1">
             <Link
              to="about"
              className="nav-link desktopMenuItemList"
              offset={-70}
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item m-1">
            <Link
              to="skills"
              className="nav-link desktopMenuItemList"
              offset={-70}
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item m-1">
            <Link
              to="projects"
              className="nav-link desktopMenuItemList"
              offset={-70}
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <motion.button
        className="desktopButton"
        whileHover={{ scale: 1.1 }} // Animation on hover
      >
        Contact Me
      </motion.button>
    </motion.nav>
  );
};

export default NavBar;

// const NavBar = () => {
//   return (
//     <nav className="navbar sticky-top navbar-expand-lg">
//       <a className="navbar-brand" href="#">
//         {/* <img
//           src={logofavicon}
//           alt="logo"
//           className="logo navbar-brand img-fluid"
//         /> */}
//         <Logo />
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul className="navbar-nav mx-auto m-1 ">
//           <li className="nav-item m-1">
//             <Link
//               activeClass="active"
//               to="home"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               className="nav-link desktopMenuItemList"
//             >
//               Home
//             </Link>
//           </li>
//           <li className="nav-item m-1">
//             <Link
//               to="about"
//               className="nav-link desktopMenuItemList"
//               offset={-70}
//               spy={true}
//               smooth={true}
//               duration={500}
//             >
//               About
//             </Link>
//           </li>
//           <li className="nav-item m-1">
//             <Link
//               to="skills"
//               className="nav-link desktopMenuItemList"
//               offset={-70}
//               spy={true}
//               smooth={true}
//               duration={500}
//             >
//               Skills
//             </Link>
//           </li>
//           <li className="nav-item m-1">
//             <Link
//               to="projects"
//               className="nav-link desktopMenuItemList"
//               offset={-70}
//               spy={true}
//               smooth={true}
//               duration={500}
//             >
//               Projects
//             </Link>
//           </li>
//           <li className="nav-item m-1">
//             {/* <button className="desktopButton">Contact Me</button> */}
//           </li>
//         </ul>
//       </div>
//       <button className="desktopButton">Contact Me</button>
//     </nav>
//   );
// };

// export default NavBar;
