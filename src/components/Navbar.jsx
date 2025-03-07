import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaFileAlt,
} from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = ({ toggleSidebar, sidebarOpen, toggleTheme, isDarkMode }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: "",
  });

  const handleMouseEnter = (e, name) => {
    setTooltip({ visible: true, x: e.clientX, y: e.clientY, name });
  };

  const handleMouseMove = (e) => {
    setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0, name: "" });
  };

  return (
    <React.Fragment>
      <motion.nav
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="rounded flex-row bg-red-400 mb-5 flex mx-20 mt-12 items-center justify-between py-1"
      >
        <div className="flex flex-shrink-0 items-center">
          <motion.b className="mx-4 text-4xl bold">CS</motion.b>
        </div>
        <div className="m-10 flex items-center justify-center gap-4 text-2xl">
          <button
            onClick={toggleTheme}
            className={`border-2 p-1 hover:bg-gray-500 hover:bg-opacity-20 rounded ${
              isDarkMode ? "border-white" : "border-black"
            }`}
            data-tip="Toggle Theme"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button onClick={toggleSidebar} className="text-2xl" data-tip="Menu">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-44 bg-red-400 shadow-lg"
      >
        <div className="flex flex-col items-center justify-center h-full my-10 ">
          <button onClick={toggleSidebar} className="text-2xl" data-tip="Menu">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link
            to="about-section"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="my-4 text-2xl"
              data-tip="About"
            >
              About
            </motion.button>
          </Link>
          <Link
            to="ex-section"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="my-4 text-2xl"
              data-tip="Experience"
            >
              Experience
            </motion.button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="my-4 text-2xl"
              data-tip="Contact"
            >
              Contact
            </motion.button>
          </Link>
          <div className="flex gap-4 my-4">
            <a
              type="button"
              href="https://www.linkedin.com/in/corbinstyles/"
              data-tip="LinkedIn"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.button>
            </a>
            <a
              type="button"
              href="https://github.com/corbinjstyles"
              data-tip="GitHub"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.button>
            </a>
            <a
              href="src/assets/Corbin Styles.pdf"
              download
              data-tip="Download Resume"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFileAlt />
              </motion.button>
            </a>
          </div>
          <div className="mt-auto mb-14">
            <button
              onClick={toggleTheme}
              className={`border-2 p-1 rounded hover:bg-gray-500 hover:bg-opacity-20 ${
                isDarkMode ? "border-white" : "border-black"
              }`}
              data-tip="Light/Dark Mode"
            >
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Navbar;
