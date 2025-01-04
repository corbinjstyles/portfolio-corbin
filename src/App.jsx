import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footnotes from "./components/Footnotes";

const App = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen 
          bg-[#000000] 
          bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
          bg-[size:20px_20px]"
        />
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <div className="grid">
          <div className="grid-cols-4">
            <Hero />
            <About />
          </div>
        </div>
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        <Footnotes />
      </div>
    </div>
  );
};

export default App;
