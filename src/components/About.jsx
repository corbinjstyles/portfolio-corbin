import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Technologies from "./Technologies";
import { FaRunning } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoMdAirplane } from "react-icons/io";

const About = ({ isDarkMode }) => {

  const hobbies = [
    {
      name: "Running",
      icon: <FaRunning className={`text-5xl ${isDarkMode ? "text-white" : "text-black"}`} />
    }, {
      name: "Gaming",
      icon: <GiConsoleController className={`text-5xl ${isDarkMode ? "text-white" : "text-black"}`} />

    }, {
      name: "Reading",
      icon: <HiOutlineBookOpen className={`text-5xl ${isDarkMode ? "text-white" : "text-black"}`} />

    }, {
      name: "Traveling",
      icon: <IoMdAirplane className={`text-5xl ${isDarkMode ? "text-white" : "text-black"}`}/>
      
    }
  ];

  return (
    <React.Fragment>
      <Element id="about-section">
        <div className={`border-b ${isDarkMode ? "border-neutral-900" : "border-neutral-200"}`}>
          <h1 className={`pb-1 font-medium text-6xl text-center lg:mt-10 ${isDarkMode ? "text-white" : "text-black"
            }`}>
            About
            <span className="text-red-500"> Me</span>
          </h1>
          <div className="flex flex-wrap">
            <motion.div
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="my-2 w-full lg:w-1/2 lg:p-4"
            >
              <div className="flex justify-center lg:justify-center">
                <p className={`my-2 text-md py-4 ${isDarkMode ? "text-white" : "text-black"}`}>
                  I am a software developer with about 3 years of hands-on experience.
                  I've worked with many people in the past both in school and in the marketplace and
                  have continued to learn more about the industry while networking with others.
                  Each project I've worked on has always taught me something new and continues to build more
                  and more excitement for the challenges that revolve around it.
                  <br /><br />
                  With 3 years of professional experience, I have worked with a variety of technologies,
                  including ReactJS, MySQL, Spring Boot, AngularTS, and MongoDB.
                  I started growing an interest with web development and software engineering when
                  I worked on a fresher project with HCLTech with a few co-workers.
                  It gave me a hunger for technical work in hopes to providing cutting edge solutions that leverage business growth.
                  <br /><br />
                  Outside of work, I enjoy running and going to the gym, being an avid and competitive gamer on every game I touch,
                  watching sports, and hanging with friends. I am always eager to learn new technologies and take on new challenges.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex justify-center">
                <Technologies isDarkMode={isDarkMode} />
              </div>
              <div className="flex justify-center">

              </div>
            </motion.div>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default About;
