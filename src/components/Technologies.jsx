import React, { useState } from "react";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { FaUnity } from "react-icons/fa";
import pythonLogo from "../assets/python.png";

const Technologies = ({ isDarkMode }) => {
  const technologies = [
    {
      name: "React",
      icon: <RiReactjsLine className="text-5xl text-cyan-400" />,
    },
    {
      name: "MySQL",
      icon: <GrMysql className="text-5xl text-cyan-400" />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-5xl text-green-400" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className={`text-5xl ${isDarkMode ? "text-white" : "text-black"}`} />,
    },
    {
      name: "Angular",
      icon: <FaAngular className="text-5xl text-red-600" />,
    },
    {
      name: "TailwindCSS",
      icon: <RiTailwindCssFill className="text-5xl text-teal-400" />,
    },
    {
      name: "Visual Studio",
      icon: <DiVisualstudio className="text-5xl text-blue-400" />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript className="text-5xl text-yellow-400" />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className="text-5xl text-blue-500" />,
    },
    {
      name: "Python",
      icon: <img src={pythonLogo} alt="Python" className="h-12 w-12"/>,
    },
    {
      name: "Unity",
      icon: (
        <FaUnity
          className={`text-5xl ${isDarkMode ? "text-white" : "text-black"}`}
        />
      ),
    },
  ];

  const [tooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: "",
  });

  return (
    <React.Fragment>
      <Element id="tech-section" />
      <div className={`my-10 pt-4`}>
        <motion.div className="flex flex-wrap items-center justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.0,
                  delay: index * 0.1, // Dynamic delay based on index
                  ease: "linear",
                  type: "spring",
                },
              }}
              initial={{ opacity: 0, y: -100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className={`relative group p-4`}
            >
              {tech.icon}
              <motion.div
                className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-1 py-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {tech.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {tooltip.visible && (
          <motion.div
            className="fixed bg-gray-800 text-white text-sm rounded px-2 py-1"
            style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {tooltip.name}
          </motion.div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Technologies;