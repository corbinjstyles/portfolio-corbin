import React from "react";

const footnotes = `
    \u00A9 Corbin Styles
    `;

const notyet = `
    Background from https://bg.ibelick.com/
    Email functionality from EmailJS https://dashboard.emailjs.com/sign-in
    Animations from framer motion 
    Framework using reactjs
    Icons from https://react-icons.github.io/react-icons/
`;

const Footnotes = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col grid grid-cols-2 pb-4 px-20">
      <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm`}>{footnotes}</p>
      <p className={`${isDarkMode ? "text-white" : "text-black"} text-sm text-right`}>Made with ReactJS & TailwindCSS</p>
    </div>
  );
};

export default Footnotes;
