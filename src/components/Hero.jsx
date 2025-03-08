import React from "react";
import profilePic from "../assets/pfp.jpg";
import { motion } from "framer-motion";

const Hero = ({ isDarkMode }) => {
  const HERO_CONTENT = ` `;

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`pb-1 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              CORBIN
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={`pb-16 text-6xl font-thin tracking-tight flex lg:text-8xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              STYLES
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className={`${isDarkMode ? "text-white" : "text-black"}`}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="mt-4 text-lg font-mono"
            >
              <span className={`${isDarkMode ? "text-white" : "text-black"}`}>
                <span className="text-green-500">></span> Welcome to my portfolio!
              </span>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded"
              src={profilePic}
              alt="Corbin Styles"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
