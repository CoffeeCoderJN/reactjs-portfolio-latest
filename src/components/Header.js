import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

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
    { id: 4, link: "mailto:mukul.dharashivkar99@gmail.com", icon: <MdEmail /> },
  ];
  return (
    <header className="sticky bg-transparent text-gray-900 dark:bg-transparent dark:text-white top-0 z-50">
      <nav className="flex justify-around items-center backdrop-filter backdrop-blur-lg bg-opacity-30 p-5">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex space-x-6 text-lg font-bold">
            {/* <a
              className="font-extralight cursor-pointer z-0 uppercase"
              href="mailto:mukul.dharashivkar99@gmail.com"
            >
              <MdEmail className="inline-flex text-2xl" /> Mail Me!
            </a> */}
            {SOCIAL.map(({ id, link, icon }) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extralight cursor-pointer z-0 uppercase hover:scale-125 hover:text-blue-600 duration-150 text-2xl"
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
          <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer text-orange-500 hover:scale-125 duration-200" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer text-blue-600 hover:scale-125 duration-200" />
            )}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
