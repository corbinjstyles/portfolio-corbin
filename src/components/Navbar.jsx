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
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className={`fixed top-0 ${sidebarOpen ? 'left-5' : 'left-10'} right-0 z-50 rounded-l flex-row bg-red-400 mb-5 flex items-center justify-between py-1 ${sidebarOpen ? 'ml-44' : 'ml-10'}`}
        // style={{ width: sidebarOpen ? "-calc(100%)" : "-calc(100%)" }}
      >
        <div className="flex flex-shrink-0 items-center">
          <motion.b className="mx-4 text-4xl bold">CS</motion.b>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <button
            onClick={toggleTheme}
            className={`border-2 p-1 rounded bg-gray-500 bg-opacity-20 ${isDarkMode ? "border-white hover:bg-white hover:bg-opacity-30" : "border-black hover:bg-black hover:bg-opacity-30"
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
        animate={{ x: sidebarOpen ? 0 : "-101%" }}
        transition={{ duration: 0, ease: "easeInOut" }}
        className={`bg-red-400 fixed top-0 left-0 h-full w-44 shadow-lg`}
      >
        <div className="flex flex-col items-center justify-center h-full my-10 top:0">
          <button onClick={toggleSidebar} className="text-2xl my-4" data-tip="Menu">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`${isDarkMode ? "bg-black" : "bg-white"} w-full`}>
            <Link
              type="button"
              to="about-section"
              spy={true}
              smooth={true}
              duration={300}
              offset={-120}
              className="w-full"
            >
              <motion.div
                type="button"
                className="border border-t-2 hover:border-2 border-gray-900 bg-red-400 w-full text-center cursor-pointer transition-all duration-100 ease-in-out hover:w-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ transformOrigin: "left center" }}
              >
                <button
                  className="my-4 font-bold text-2xl text-center w-full"
                  data-tip="About"
                >
                  About
                </button>
              </motion.div>
            </Link>
            <Link
              to="experience-section"
              spy={true}
              smooth={true}
              duration={300}
              offset={-120}
              className="w-full"
            >
              <motion.div
                type="button"
                className="border hover:border-2 border-gray-900 bg-red-400 w-full text-center cursor-pointer transition-all duration-100 ease-in-out hover:w-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ transformOrigin: "left center" }}
              >
                <button
                  className="my-4 font-bold text-2xl text-center w-full"
                  data-tip="Experience"
                >
                  Experience
                </button>
              </motion.div>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              offset={-120}
              className="w-full"
            >
              <motion.div
                className="border border-b-2 hover:border-2 border-gray-900 bg-red-400 w-full text-center cursor-pointer transition-all duration-100 ease-in-out hover:w-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ transformOrigin: "left center" }}
              >
                <button
                  className="my-4 font-bold text-2xl text-center w-full"
                  data-tip="Contact"
                >
                  Contact
                </button>
              </motion.div>
            </Link>
          </div>
          <div className="bg-red-400 flex text-2xl gap-4 my-4">
            <a
              type="button"
              href="https://www.linkedin.com/in/corbinstyles/"
              data-tip="LinkedIn"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
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
                className="cursor-pointer"
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
                className="cursor-pointer"
              >
                <FaFileAlt />
              </motion.button>
            </a>
          </div>

          <div className="bg-red-400 mt-auto mb-14">
            <button
              onClick={toggleTheme}
              className={`border-2 p-1 rounded bg-gray-500 bg-opacity-20 ${isDarkMode ? "border-white hover:bg-white hover:bg-opacity-30" : "border-black hover:bg-black hover:bg-opacity-30"
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
