import React from "react";
import Section from "./common/Section";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { RiWhatsappFill } from "react-icons/ri";

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
    { id: 4, link: "https://wa.me/918446567366", icon: <RiWhatsappFill /> },
    { id: 5, link: "mailto:mukul.dharashivkar99@gmail.com", icon: <MdEmail /> },
  ];
  return (
    <Section id="contact" title="Contact" subtitle="Get in touch with me">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        className="bg-black/5 dark:bg-black/40 p-10 rounded-3xl shadow-lg shadow-gray-400/30 dark:shadow-black/40"
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
            <p className="max-w-xs md:max-w-lg font-extralight">
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
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-200 ease-in-out hover:scale-125 hover:text-violet-600"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          {/* bottom form */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 text-left w-full"
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
                    className="rounded-2xl p-3 flex focus:outline-none bg-gray-300 dark:bg-zinc-800 dark:text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-light">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="rounded-2xl p-3 flex focus:outline-none bg-gray-300 dark:bg-zinc-800 dark:text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-light">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="rounded-2xl p-3 flex focus:outline-none bg-gray-300 dark:bg-zinc-800 dark:text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-light">
                    message
                  </label>
                  <textarea
                    name="message"
                    rows="10"
                    className="rounded-2xl p-3 flex focus:outline-none bg-gray-300 dark:bg-zinc-800 dark:text-white resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="flex group my-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white px-6 py-3 uppercase rounded-xl cursor-pointer hover:scale-110 duration-200 font-semibold tracking-[1px] hover:text-black shadow-lg shadow-gray-400/30 dark:shadow-black/40">
                  Send Message
                  <span>
                    <MdOutlineKeyboardArrowRight className="text-2xl group-hover:rotate-180 duration-500 mx-1 group-hover:text-black z-0" />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact;