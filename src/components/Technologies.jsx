import React from "react";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

let delay = 0.5

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
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl text-white">Technologies</h2>
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
    </div>
  );
};

export default Technologies;
