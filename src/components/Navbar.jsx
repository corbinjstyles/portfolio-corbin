import React from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaSun, FaMoon, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = ({ toggleSidebar, sidebarOpen, toggleTheme, isDarkMode }) => {
  return (
    <React.Fragment>
      <motion.nav
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="rounded flex-row bg-blue-300 mb-5 flex mx-20 mt-12 items-center justify-between py-1"
      >
        <div className="flex flex-shrink-0 items-center">
          <motion.b className="mx-4 text-4xl bold">CS</motion.b>
        </div>
        <div className="m-10 flex items-center justify-center gap-4 text-2xl">
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
          <a href="src/assets/Corbin Styles.pdf" download className="text-2xl">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaFileDownload />
            </motion.button>
          </a>
          <button onClick={toggleSidebar} className="text-2xl">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <button onClick={toggleTheme} className="border-black">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-44 bg-blue-300 shadow-lg z-50"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <button onClick={toggleSidebar} className="text-2xl">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="about-section" spy={true} smooth={true} duration={500} onClick={toggleSidebar}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="my-4 text-2xl">
              About
            </motion.button>
          </Link>
          <Link to="ex-section" spy={true} smooth={true} duration={500} onClick={toggleSidebar}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="my-4 text-2xl">
              Experience
            </motion.button>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500} onClick={toggleSidebar}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="my-4 text-2xl">
              Contact
            </motion.button>
          </Link>          
          <button onClick={toggleTheme} className="text-2xl">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Navbar;
