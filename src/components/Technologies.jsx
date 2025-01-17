import React from "react";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const technologies = [
  {
    name: "ReactJs",
    delay: 0.5,
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
  },
  {
    name: "MySQL",
    delay: 0.8,
    icon: <GrMysql className="text-7xl text-cyan-400" />,
  },
  {
    name: "Spring Boot",
    delay: 1.2,
    icon: <SiSpringboot className="text-7xl text-green-400" />,
  },
  {
    name: "GitHub",
    delay: 1.6,
    icon: <FaGithub className="text-7xl text-white" />,
  },
  {
    name: "Angular",
    delay: 2.0,
    icon: <FaAngular className="text-7xl text-red-600" />,
  },
  {
    name: "TailwindCSS",
    delay: 2.4,
    icon: <RiTailwindCssFill className="text-7xl text-blue-400" />,
  },
  {
    name: "Visual Studio",
    delay: 2.8,
    icon: <DiVisualstudio className="text-7xl text-blue-400" />,
  },
  {
    name: "Javascript",
    delay: 3.2,
    icon: <SiJavascript className="text-7xl text-yellow-400" />,
  },
  {
    name: "Typescript",
    delay: 3.6,
    icon: <SiTypescript className="text-7xl text-blue-500" />,
  },
  {
    name: "Python",
    delay: 4.0,
    icon: <FaPython className="text-7xl text-purple-600" />,
  },
];

const TECH_DESC = `I have experience in the following technologies. Continuously looking to 
  add more build up more and more technologies`;

const Technologies = () => {
  return (
    <React.Fragment>
      <Element id="tech-section" />
      <div className="pt-10 border-b border-neutral-800 pb-24">
        <h2 className="my-10 text-center text-4xl text-white">Technologies</h2>
        <motion.div className="flex flex-wrap items-center justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.0,
                  delay: tech.delay,
                  ease: "linear",
                  type: "spring",
                },
              }}
              initial={{ opacity: 0, y: -100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* <ul className="pt-20 text-center">
          <li className="text-white">React (1 Year)</li>
          <li className="text-white">SQL (2 Years)</li>
          <li className="text-white">Spring Boot (1 Year)</li>
          <li className="text-white">Github (2 years)</li>
          <li className="text-white">Angular (1 year)</li>
          <li className="text-white">Tailwind (1 year)</li>
        </ul> */}
        <p className="text-white my-5">{TECH_DESC}</p>
      </div>
    </React.Fragment>
  );
};

export default Technologies;
