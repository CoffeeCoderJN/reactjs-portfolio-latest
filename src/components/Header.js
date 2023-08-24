import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = ({ darkMode, setDarkMode }) => {
  // const SOCIAL = [
  //   {
  //     id: 1,
  //     link: "https://www.linkedin.com/in/themukuldharashivkar",
  //     icon: <FaLinkedin />,
  //   },
  //   {
  //     id: 2,
  //     link: "https://www.github.com/themukuldharashivkar",
  //     icon: <FaGithub />,
  //   },
  //   { id: 3, link: "https://www.twitter.com/themukul_99", icon: <FaTwitter /> },
  //   { id: 4, link: "https://wa.me/918446567366", icon: <RiWhatsappFill /> },
  //   { id: 5, link: "mailto:mukul.dharashivkar99@gmail.com", icon: <MdEmail /> },
  // ];
  return (
    <header className="sticky bg-transparent text-gray-900 dark:bg-transparent dark:text-white top-0 z-40">
      <nav className="flex md:justify-around items-center backdrop-filter backdrop-blur-lg bg-opacity-30 p-5 justify-between">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="flex space-x-4 text-lg font-bold">
            {SOCIAL.map(({ id, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extralight cursor-pointer z-0 uppercase hover:scale-125 hover:text-indigo-600 duration-150 text-2xl"
              >
                {icon}
              </a>
            ))}
          </div> */}
          <div className="">
            <h1 className="font-yesteryear md:text-4xl text-2xl text-amber-500 underline">
              Mukul
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => setDarkMode(!darkMode)}
            className="dark:bg-[#101111] bg-gray-100 p-1 md:p-3 rounded-xl duration-200 shadow-sm shadow-gray-400/30 dark:shadow-[#101111]/70 border dark:border-white/5 border-black/5 group"
          >
            {darkMode ? (
              <FiSun className="text-xl md:text-2xl cursor-pointer text-gray-200 group-hover:text-amber-400 duration-150" />
            ) : (
              <FiMoon className="text-xl md:text-2xl cursor-pointer text-gray-600 group-hover:text-indigo-500 duration-150" />
            )}
          </motion.div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
