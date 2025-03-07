import React from "react";
import profilePic from "../assets/pfp.jpg";
import { motion } from "framer-motion";

const Hero = ({ isDarkMode }) => {
  const HERO_CONTENT = `I am a software developer with about 3 years of hands-on experience.
  I've worked with many people in the past both in school and in the marketplace and have continued to learn more 
  about the industry while networking with others. Each project I've worked on has always taught me something new
  and continues to build more and more excitement that revolves around it! `;

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
