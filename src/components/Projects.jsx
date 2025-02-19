import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const onTop = useInView(topRef);
  const onBottom = useInView(bottomRef);

  useEffect(() => {
    console.log("Top: " + onTop);
    console.log("Bottom: " + onBottom);
  }, [onTop, onBottom]);

  function flag(onTop, onBottom) {
    if (onBottom === true) {
      return -100;
    } else if (onTop === true) {
      return 100;
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="border-b border-neutral-900 pb-20"> {/* Increased padding-bottom */}
      <div ref={topRef} />
      <h2 className="my-10 text-center text-4xl text-white">Projects</h2>
      <Slider {...settings}>
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
                width={150} // Fixed width
                height={150} // Fixed height
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
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 border border-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
      <div ref={bottomRef} />
    </div>
  );
};

export default Projects;
