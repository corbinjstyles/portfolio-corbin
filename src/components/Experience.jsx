import React from "react";
import { motion } from "framer-motion";
import utsaLogo from "../assets/utsa.png"; // Add the path to the UTSA logo
import hcltechLogo from "../assets/hcltech.png"; // Add the path to the HCLTech logo
import tapfcuLogo from "../assets/tapfcu.png"; // Add the path to the TAPFCU logo
import { FaFileAlt } from "react-icons/fa";

const Experience = ({ isDarkMode }) => {
  const EXPERIENCES = [
    {
      year: "Mar 2025 - Present",
      role: "Tech & Comp Specialist",
      company: "Texas Associations of Professionals Federal Credit Union",
      description: `Provided technical support and assistance to credit union members and staff.
        Handled vendor management storage and documentation. Updated and wrote policies and procedures
        for the IT department to ensure compliance and efficiency.`,
      technologies: ["SharePoint", "MSP", "HTML"],
      logo: tapfcuLogo,
    },
    {
      year: "Jan 2022 - Jun 2024",
      role: "Digital Consultant",
      company: "HCLTech",
      description: `Provided solutions through
        consulting services for client-based needs to meet specific business requirements. 
        Partnered with multiple teams for different clients reducing the bandwidth and workload for each project.`,
      technologies: [
        "Typescript",
        "Angular",
        "SAS",
        "Spring Boot",
        "MySQL",
        "Java",
      ],
      logo: hcltechLogo,
    },
    {
      year: "Jun 2021 - Dec 2021",
      role: "Research Student",
      company: "University of Texas at San Antonio",
      description: `Undergraduate research role opportunity focusing on the behavior of objects created through
        augmented reality applications. Built a game that has the user(s) go through an augmented reality maze.`,
      technologies: ["C#", "Unity", "Photon Unity Network"],
      logo: utsaLogo,
    },
  ];

  const EDUCATION = [
    {
      year: "Aug 2017 - Dec 2021",
      role: "Student",
      company: "University of Texas at San Antonio",
      description: `Completed coursework curriculum to obtain my Bachelor's of Science in Computer Science at UTSA.`,
      technologies: ["Data Structures", "C", "Python", "Java"],
      logo: utsaLogo,
    },
  ];

  return (
    <div id="experience-section">
      <h2
        className={`text-3xl my-10 ${
          isDarkMode ? "text-white" : "text-black"
        } text-center font-medium lg:text-5xl`}
      >
        Experience
      </h2>
      <div className="flex justify-center">
        <a
          href="src/assets/Corbin Styles.pdf"
          download
          data-tip="Download Resume"
          className={`flex items-center border-2 rounded-lg p-2 mb-4 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <FaFileAlt className="text-3xl" />
          <p
            className={`text-md pl-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Resume
          </p>
        </a>
      </div>
      <div
        className={`border-b ${
          isDarkMode ? "border-neutral-900" : "border-neutral-200"
        }`}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`mb-8 flex flex-wrap lg:mx-44 lg:justify-center border-4 p-4 rounded-lg ${
              isDarkMode ? "bg-white border-white" : "bg-black border-black"
            } bg-opacity-50`}
          >
            <div className="w-full max-w-xl lg:w-3/4 flex items-center">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-12 h-12 mr-4"
              />
              <div>
                <h6 className={`mb-2 font-semibold text-white`}>
                  {experience.role} - {experience.company}{" "}
                </h6>
                <h2 className={`text-white`}>{experience.description}</h2>
              </div>
            </div>
            <div className="w-full lg:w-1/4 text-right">
              <p className={`mb-2 text-sm text-white `}>{experience.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
