import React from "react";
import Section from "./common/Section";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/themukuldharashivkar",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://www.github.com/themukuldharashivkar",
      icon: <FaGithub />,
    },
    { id: 3, link: "https://www.twitter.com/themukul_99", icon: <FaTwitter /> },
    { id: 4, link: "mailto:mukul.dharashivkar99@gmail.com", icon: <MdEmail /> },
  ];
  return (
    <Section id="contact" title="Let's Connect" subtitle="Get in touch with me">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        className="bg-black/5 dark:bg-[#101111] p-10 rounded-3xl shadow-lg shadow-gray-400/30 dark:shadow-black/40 border dark:border-white/5 border-black/5 m-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center justify-center gap-8 text-center"
        >
          {/* <div>
          <img src={contact} alt="contact info" className="w-32 h-32"></img>
        </div> */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="max-w-xs md:max-w-lg font-extralight text-xs md:text-sm">
              I am open to talk regarding freelancing or full time
              opportunities. Feel free to contact me using your preferred
              medium.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex w-full items-center justify-evenly text-3xl"
          >
            {SOCIAL.map(({ id, link, icon }) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* bottom form */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-3 text-left w-full"
          >
            <form
              action="https://getform.io/f/e05b6bc9-032c-4a2c-a5af-ff2107822d78"
              method="POST"
            >
              <div className="gap-4 w-full">
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-light">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="rounded-xl p-3 flex focus:outline-none bg-white dark:bg-[#050505] dark:text-white border border-black/10 dark:border-white/10"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-light">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="rounded-xl p-3 flex focus:outline-none bg-white dark:bg-[#050505] dark:text-white border border-black/10 dark:border-white/10"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-light">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="rounded-xl p-3 flex focus:outline-none bg-white dark:bg-[#050505] dark:text-white border border-black/10 dark:border-white/10"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-light">
                    message
                  </label>
                  <textarea
                    name="message"
                    rows="10"
                    className="rounded-2xl p-3 flex focus:outline-none bg-white dark:bg-[#050505] dark:text-white resize-none border border-black/10 dark:border-white/10"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex group mt-10 mb-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white px-6 py-3 uppercase rounded-xl cursor-pointer font-semibold tracking-[1px] hover:text-black shadow-lg shadow-gray-400/30 dark:shadow-black/40 "
                >
                  Send Message
                  <span>
                    <MdOutlineKeyboardArrowRight className="text-2xl group-hover:rotate-180 duration-500 mx-1 group-hover:text-black z-0" />
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact;
