import React from "react";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const techs = [{}];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl text-white">Technologies</h2>
      <motion.div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.0,
              delay: 0.5,
              ease: "linear",
              type: "spring",
            },
          }}
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.0,
              delay: 0.8,
              ease: "linear",
              type: "spring",
            },
          }}
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <GrMysql className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.0,
              delay: 1.2,
              ease: "linear",
              type: "spring",
            },
          }}
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.0,
              delay: 1.6,
              ease: "linear",
              type: "spring",
            },
          }}
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.0,
              delay: 2.0,
              ease: "linear",
              type: "spring",
            },
          }}
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAngular className="text-7xl text-white" />
        </motion.div>
        <motion.div
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.0,
              delay: 2.4,
              ease: "linear",
              type: "spring",
            },
          }}
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
