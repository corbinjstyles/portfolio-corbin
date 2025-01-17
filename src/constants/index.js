import project1 from "../assets/projects/ecommerce.png";
import project2 from "../assets/projects/salsa.jpg";
import project3 from "../assets/projects/portfolio.avif";

export const HERO_CONTENT = `I am a software developer driven to provide cutting edge technologies. With 5 years of hands-on experience, 
  I have honed my skills in front-end technologies like React and Tailwind, 
  as well as back-end technologies like MySQL, Spring Boot, and MongoDB. 
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
      Partnered with multiple teams for different clients reducing the bandwidth and and workload for each project.`,
    technologies: ["Typescript", "Angular", "SAS", "Spring Boot", "MySQL", "Java"],
  },
  {
    year: "Jun 2021 - Dec 2021",
    role: "AR Research Role",
    company: "University of Texas at San Antonio",
    description: `Undergraduate research role opportunity focusing on the behavior of objects created through
      augmented reality applications. Built a game that has the user(s) go through an augmented reality maze.
      `,
    technologies: ["C#", "Unity", "Photon Unity Network"],
  },
  {
    year: "Aug 2017 - Dec 2021",
    role: "Student",
    company: "University of Texas at San Antonio",
    description: `Completed coursework curriculum to obtain my Bachelor's of Science in Computer Science at UTSA. 
      `,
    technologies: ["Data Structures", "C", "Python", "Java"],
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
    technologies: ["HTML", "React.js", "Tailwind CSS", "EmailJS", "Framer Motion"],
  },
  {
    title: "Salsa Website",
    image: project2,
    description:
      "Website created to receive feedback and reviews for our family's salsa sold at peach stands in our hometown.",
    technologies: ["HTML", "React.js", "Bootstrap CSS", "EmailJS", "AWS", "SQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
