import React from "react";
import aboutImg from "../assets/vancouver_pic.jpg";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-pink-500 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="my-11 w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-center">
                <p className="my-2 max-w-xl py-16 text-white">{ABOUT_TEXT}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
