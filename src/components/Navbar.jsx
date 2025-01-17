import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BrowserRouter, NavLink } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded bg-blue-300 mb-5 flex mx-20 mt-12 items-center justify-between py-1"
    >
      <div className="flex flex-shrink-0 items-center">
        {/* <Sidebar/> */}
        <motion.b
          initial={{ opacity: 0, rotate: -270 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          whileTap={{rotate:360, duration:.1}}
          className="mx-4 text-4xl bold"
        >
          CS
        </motion.b>
      </div>
      <div className="m-10 flex items-center justify-center gap-4 text-2xl">
        <Link to="about-section" spy={true} smooth={true} duration={500}>
          <button type="button">About</button>
        </Link>
        <Link to="tech-section" spy={true} smooth={true} duration={500}>
          <button type="link">Technologies</button>
        </Link>
        <Link to="tech-section" spy={true} smooth={true} duration={500}>
          <button type="link">Technologies</button>
        </Link>

        <a type="link">Home</a>
        <a type="link">Home</a>
        <a type="button" href="https://www.linkedin.com/in/corbinstyles/">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaLinkedin />
          </motion.button>
        </a>
        <a type="button" href="https://github.com/corbinjstyles">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaGithub />
          </motion.button>
        </a>
        {/* <a type="button" href="https://www.instagram.com/corbinstyles/">
          <button>
            <FaInstagram />
          </button>
        </a> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
