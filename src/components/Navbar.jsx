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

const name = "Corbin Styles";

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
          whileTap={{ rotate: 360, duration: 0.1 }}
          className="mx-4 text-4xl bold"
        >
          CS
        </motion.b>
      </div>
      <div className="text-6xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
        <motion.p >
          Corbin Styles
        </motion.p>
      </div>
      <div className="m-10 flex items-center justify-center gap-4 text-2xl">
        <Link to="about-section" spy={true} smooth={true} duration={500}>
          <motion.button
            type="button"
            className="hover:text-black-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            whileHover={{ scale: 0.9 }}
          >
            About
          </motion.button>
        </Link>
        <Link to="ex-section" spy={true} smooth={true} duration={500}>
          <motion.button
            type="button"
            className="hover:text-black-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            whileHover={{ scale: 0.9 }}
          >
            Experience
          </motion.button>
        </Link>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <motion.button
            type="button"
            className="hover:text-black-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            whileHover={{ scale: 0.9 }}
          >
            Contact
          </motion.button>
        </Link>
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
