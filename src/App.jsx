import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footnotes from "./components/Footnotes";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <React.Fragment>
      <div
        className={`overflow-x-hidden overflow-y-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900  ${sidebarOpen ? "ml-44" : ""}`}>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="absolute top-0 z-[-2] h-screen w-screen 
          bg-[#000000] 
          bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
          bg-[size:20px_20px]"
          />
        </div>
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <div className="container items-center mx-auto">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <div className="h-10 px-20">
          <Footnotes />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
