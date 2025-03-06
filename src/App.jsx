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
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); 
  };

  return (
    <React.Fragment>
      <div
        className={`overflow-x-hidden overflow-y-hidden antialiased selection:bg-white-300 selection:text-white-900 ${
          sidebarOpen ? "ml-44" : ""
        } ${isDarkMode ? "text-neutral-900 bg-black" : "text-black bg-white"}`} // Apply theme classes
      >
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className={`absolute top-0 z-[-2] h-screen w-screen ${
              isDarkMode
                ? "bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
                : "bg-[#ffffff] bg-[radial-gradient(#00000033_1px,#ffffff1d_1px)] bg-[size:20px_20px]"
            }`}
          />
        </div>
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="container items-center mx-auto">
          <Hero isDarkMode={isDarkMode}/>
          <About isDarkMode={isDarkMode}/>
          <Experience isDarkMode={isDarkMode}/>
          {/* <Projects isDarkMode={isDarkMode}/> */}
          <Contact isDarkMode={isDarkMode}/>
        </div>
        <div className="h-10 px-20">
          <Footnotes isDarkMode={isDarkMode}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
