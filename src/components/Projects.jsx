import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

const Projects = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const onTop = useInView(topRef);
  const onBottom = useInView(bottomRef);


  useEffect(() => {
    console.log("Top: " + onTop);
    console.log("Bottom: " + onBottom);
  }, [onTop,onBottom]);

  function flag (onTop, onBottom){
    
    if (onBottom == true){
      return -100;
    }else if (onTop == true){
      return 100;
    }
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <div ref={topRef}/>
      <h2 className="my-20 text-center text-4xl text-white">Projects</h2>
      
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-4 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: flag(onTop, onBottom) }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: flag(onTop, onBottom) }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="text-white mb-2 font-bold">{project.title}</h6>
              <p className="text-white">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      <div ref={bottomRef}/>
    </div>
  );
};

export default Projects;
