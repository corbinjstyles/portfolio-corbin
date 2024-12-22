import React from "react";

const footnotes = `
    \u00A9 Corbin Styles
    Background from https://bg.ibelick.com/
    Email functionality from EmailJS https://dashboard.emailjs.com/sign-in
    Animations from framer motion 
    Framework using reactjs
    Icons from https://react-icons.github.io/react-icons/
    `;

const Footnotes = () => {
  return (
    <div className="text-white">
      {footnotes}
    </div>
  );
};

export default Footnotes;
