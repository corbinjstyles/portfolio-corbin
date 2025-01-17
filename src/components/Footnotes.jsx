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

const Footnotes = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="text-white text-sm">{footnotes}</div>
      <div className="text-white text-right text-sm">Made with ReactJS & TailwindCSS</div>
    </div>
  );
};

export default Footnotes;
