import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BrowserRouter, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="rounded bg-blue-300 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <b className="mx-2 text-4xl bold">CS</b>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
    </nav>
  );
};

export default Navbar;
