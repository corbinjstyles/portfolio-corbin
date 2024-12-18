import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jif4ysc", "template_ft9zayd", form.current, {
        publicKey: "S48g12QrwD8eH_UHI",
      })
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setFormError(true);
        }
      );
  };

  useEffect(() => {
    if (formSubmitted && form.current) {
      setTimeout(() => {
        form.current.reset();
        setFormSubmitted(false);
      }, 3000);
    }
  }, [formSubmitted]);

  return (
    <div className="flex flex-wrap">
      <div
        id="form-container"
        className="lg:p-5 font-Encode-Sans w-full lg:w-1/2"
      >
        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: "200%" }}
            transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }}
            animate={{ y: 0 }}
            className="my-20 text-white text-center text-4xl"
          >
            Contact Me!
          </motion.h3>
        </div>
        {formError && (
          <motion.div
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-center text-lg mt-5 text-rose-600">
              Something went wrong! Please try again later.
            </p>
          </motion.div>
        )}
        <motion.div
          transition={{ duration: 0.5, delay: 0.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-5"
        >
          {formSubmitted ? (
            <motion.div
              transition={{ duration: 0.5, delay: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-center text-green-500 text-xl lg:mt-40 mt-20 mb-20 ">
                Thank you for your message! I&apos;ll get back to you shortly!
              </p>
            </motion.div>
          ) : (
            <form method="POST" action="" ref={form} onSubmit={sendEmail}>
              <div className="mx-auto rounded-xl max-w-xl">
                <div className="grid grid-cols-1 gap-6 label">
                  <div className="overflow-hidden">
                    <label htmlFor="name" className="block border-b py-2 ">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Name"
                        className="
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                      />
                    </label>
                  </div>
                  <label htmlFor="email" className="block border-b">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required="required"
                      className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                    />
                  </label>
                  <label htmlFor="phone" className="block border-b">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      required="required"
                      className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                    />
                  </label>
                  <label htmlFor="company" className="block border-b">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company"
                      required="required"
                      className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                    />
                  </label>

                  <label className="block border-b">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required="required"
                      placeholder="Tell us a little more about your cool project!"
                      className="
                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige text-2xl font-bold
                  "
                    ></textarea>
                  </label>
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 hover:bg-indigo-300 hover:text-neutral-800 p-3 rounded-lg w-full"
                    >
                      Send
                    </motion.button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
      <div className="lg:p-4 w-full lg:w-1/2">
        <div className="py-9">
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=UTSA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
        <h2 className="py-3 text-white">
          I am located near UTSA in the San Antonio metro area where I work. 
          If you want to discuss business ideas or meet near it's vicinity
          then feel free to shoot an email!
        </h2>
      </div>
    </div>
  );
};

export default Contact;
