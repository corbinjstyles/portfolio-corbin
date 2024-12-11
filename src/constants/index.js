import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust 
  and scalable web applications. With 5 years of hands-on experience, 
  I have honed my skills in front-end technologies like React and Next.js, 
  as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. 
  My goal is to leverage my expertise to create innovative solutions that drive business 
  growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with 
  a passion for creating efficient and user-friendly web applications. 
  With 5 years of professional experience, I have worked with a variety of technologies, 
  including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. 
  My journey in web development began with a deep curiosity for how things work, 
  and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. 
  Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2022 - Jun 2024",
    role: "IT Consultant",
    company: "HCLTech",
    description: `Provided solutions through
      consulting services for client-based needs to meet specific business requirements.
      Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Typescript", "Angular", "SAS", "Spring Boot", "MySQL", "Java"],
  },
  {
    year: "Jun 2021 - Dec 2021",
    role: "AR Research Role",
    company: "University of Texas at San Antonio",
    description: `Undergraduate research role opportunity focusing on the behavior of objects created through
      augmented reality applications. Built a game that has the user(s) go through anaugmented reality maze.
      Project was made using Unity game engine and scripted in C# to create augmented reality
      objects for players to walk between in-game walls shown through a mobile device. Lobby was made utilizing 
      Photon Unity Network to construct allowing multiple players to explore the maze.`,
    technologies: ["C#", "Unity", "Photon Unity Network"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Angular", "Node.js", "MySQL", "Spring Boot"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React.js", "Tailwind CSS", "EmailJS"],
  },
  {
    title: "Salsa Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React.js", "Tailwind CSS", "EmailJS"],
  },

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
