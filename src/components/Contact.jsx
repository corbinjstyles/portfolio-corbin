import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_jif4ysc", "template_ft9zayd", form.current, "S48g12QrwD8eH_UHI")
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
    <div id="contact" className={`flex flex-wrap border-b ${isDarkMode ? "border-neutral-900" : "border-neutral-200"} `}>
      <div
        id="form-container"
        className="lg:p-5 font-Encode-Sans w-full lg:w-1/2"
      >
        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: "200%" }}
            transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }}
            animate={{ y: 0 }}
            className={`my-10 ${isDarkMode ? "text-white" : "text-black"} text-center font-medium text-5xl`}
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
              <div className={`mx-auto border rounded-xl ${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-5`}>
                <div className="grid grid-cols-1 gap-6 label">
                  <div className="flex">
                    <label htmlFor="firstName" className="">
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        required="required"
                        placeholder="First Name"
                        className={`w-full block rounded-md ${isDarkMode ? "bg-black-800" : "bg-white-800"} px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400`}
                      />
                    </label>
                    <label htmlFor="lastName">
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        required="required"
                        placeholder="Last Name"
                        className={`w-full block rounded-md ${isDarkMode ? "bg-black-800" : "bg-white-800"} px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400`}
                      />
                    </label>
                  </div>
                  <label htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required="required"
                      className={`w-full block rounded-md ${isDarkMode ? "bg-black-800" : "bg-white-800"} px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400`}
                    />
                  </label>

                  {/* <div>
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autocomplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                          <option>US +1</option>
                          <option>CA </option>
                          <option>EU</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="block rounded-md min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        placeholder="Phone Number (xxx-xxx-xxxx)"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}$"
                      />
                    </div>
                  </div> */}

                  {/* <label htmlFor="subject">
                    <input
                      type="subject"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required="required"
                      className="w-full block rounded-md bg-white px-3.5 py-2 text-gray-900 outline-gray-300 placeholder:text-gray-400"
                    />
                  </label> */}
                  <label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required="required"
                      placeholder="Message"
                      className="w-full block rounded-md bg-white px-3.5 py-2 text-gray-900 outline-gray-300 placeholder:text-gray-400"
                    ></textarea>
                  </label>
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className={`text-sm  ${isDarkMode ? "bg-indigo-500 text-white hover:bg-indigo-300 hover:text-neutral-800" : "bg-blue-400 text-white hover:bg-blue-300 hover:text-neutral-800"} p-3 rounded-lg w-full`}
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
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 1,
            duration: 1,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="py-3"
        >
          <iframe
            width="100%"
            height="437"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=UTSA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </motion.div>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 1.5,
            duration: 1,
          }}
          animate={{ y: 0, opacity: 1 }}
          className={`py-3 ${isDarkMode ? "text-white" : "text-black"}`}
        >
          I am located near UTSA in the San Antonio metro area where I work. If
          you want to discuss business ideas or meet near it's vicinity, then
          feel free to shoot an email!
        </motion.h2>
      </div>
    </div>
  );
};

export default Contact;
