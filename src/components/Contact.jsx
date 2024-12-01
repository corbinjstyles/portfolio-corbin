import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jif4ysc", "template_ft9zayd", form.current, {
        publicKey: "S48g12QrwD8eH_UHI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl text-white">Contact Me!</h2>
      <form ref={form} onSubmit={sendEmail}>
      <label className="text-white">Name</label>
      <input type="text" name="name" />
      <label className="text-white">Subject</label>
      <input type="text" name="subject" />
      <label className="text-white">Email</label>
      <input type="email" name="email" />
      <label className="text-white">Message</label>
      <textarea name="message" />
      <button className="" type="submit" value="Send" />
    </form>
    </div>
  );
};

export default Contact;
