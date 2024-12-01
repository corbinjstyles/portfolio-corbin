import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-white text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-white">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-white">{experience.role} - {experience.company} </h6>
                <h2 className="text-white">{experience.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
