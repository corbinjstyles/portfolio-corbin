import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pfp.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pb-1 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl text-pink-300"
            >
              CORBIN
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pb-16 text-6xl font-thin tracking-tight flex lg:text-8xl text-pink-300"
            >
              STYLES
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="bg-gradient-to-r from-blue-300 via-slate-500 to-orange-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="text-white"
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
