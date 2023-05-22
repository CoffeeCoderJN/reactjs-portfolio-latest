import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Header = ({ darkMode, setDarkMode }) => {
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
    <header className="sticky bg-transparent text-gray-900 dark:bg-transparent dark:text-white top-0 z-50">
      <nav className="flex md:justify-around items-center backdrop-filter backdrop-blur-lg bg-opacity-30 p-5 justify-between">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex space-x-4 text-lg font-bold">
            {/* <a
              className="font-extralight cursor-pointer z-0 uppercase"
              href="mailto:mukul.dharashivkar99@gmail.com"
            >
              <MdEmail className="inline-flex text-2xl" /> Mail Me!
            </a> */}
            {SOCIAL.map(({ id, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extralight cursor-pointer z-0 uppercase hover:scale-125 hover:text-violet-600 duration-150 text-2xl"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div onClick={() => setDarkMode(!darkMode)} className="dark:bg-black/70 bg-black/10 p-2 rounded-xl hover:scale-110 duration-200 shadow-sm shadow-gray-400/30 dark:shadow-black/40">
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer text-amber-500" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer text-violet-600" />
            )}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
