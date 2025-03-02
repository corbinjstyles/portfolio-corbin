import React from "react";
import aboutImg from "../assets/vancouver_pic.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Technologies from "./Technologies";

const About = () => {
  return (
    <React.Fragment>
      <Element id="about-section">
        <div className="border-b border-neutral-900 pb-4">
          <h1 className="mt-10 text-pink-500 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span>
          </h1>
          <div className="flex flex-wrap">
            <motion.div
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="my-2 w-full lg:w-1/2 lg:p-4"
            >
              <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about" />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex justify-center lg:justify-center">
                <p className="my-2 text-md py-4 text-white">{ABOUT_TEXT}</p>

              </div>
              <div className="flex justify-center"><Technologies /></div>
            </motion.div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default About;
