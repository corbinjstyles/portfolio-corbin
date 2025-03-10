import React, { useState, useEffect } from "react";
import vancouverPic from "../assets/vancouver_pic.jpg";
import { motion } from "framer-motion";

const Hero = ({ isDarkMode }) => {
  const HERO_CONTENT = `Welcome to my portfolio! The main purpose for creating this webpage is to 
    document skills and experiences that I've attained throughout my career. 
    This website is also used as a sandbox for new code and features to showcase my web development skills in hopes 
    to provide more clean and user-friendly experiences for visitors. 
    If you'd have any questions, feel free to email me at the bottom of the page!
    If you'd like to network with me, feel free to reach out to me via LinkedIn!
    Cheers!`;
  const typingText = ["Software Developer", "Web Developer", "Tech Enthusiast"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typingText.length;
      const fullText = typingText[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentIndex(currentIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, loopNum, typingText, currentIndex]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              // lg:text-8xl is for large screen dimensions, otherwise text-6xl
              className={`pb-1 text-6xl lg:mt-10 lg:text-8xl ${isDarkMode ? "text-white" : "text-black"
                }`}
            >
              CORBIN
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={`pb-16 text-6xl flex lg:text-8xl ${isDarkMode ? "text-white" : "text-black"
                }`}
            >
              STYLES
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.5 }}
              className="text-4xl font-mono mt-4"
            >
              <span className={`${isDarkMode ? "text-white" : "text-black"}`}>
                &gt; {currentText}
                <span className="blinking-cursor">|</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className={`mt-10 ${isDarkMode ? "text-white" : "text-black"}`}
            >
              {HERO_CONTENT}&#128578;
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded"
              src={vancouverPic}
              alt="Corbin Styles"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
