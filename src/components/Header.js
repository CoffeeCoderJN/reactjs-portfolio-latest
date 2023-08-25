import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky bg-white/70 text-gray-900 dark:bg-neutral-900/70 dark:text-white top-0 z-40 duration-700 ease-in-out">
      <nav className="flex md:justify-around items-center backdrop-filter backdrop-blur-lg bg-opacity-30 px-5 py-3 md:py-3 justify-between border-neutral-100 border-b dark:border-neutral-800">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="">
            <h1 className="font-yesteryear text-4xl text-amber-500 underline">
              Mukul
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-4 items-center"
        >
          <a
            href="https://mukuldharashivkar-blog.vercel.app/"
            className="dark:bg-[#101111] bg-gray-100 px-5 py-1.5 md:py-2.5 rounded-3xl duration-200 shadow-sm shadow-gray-400/30 dark:shadow-[#101111]/70 border dark:border-white/5 border-black/5 hover:scale-110"
          >
            <span className="text-sm md:text-lg">Blog</span>
          </a>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => setDarkMode(!darkMode)}
            className="dark:bg-[#101111] bg-gray-100 p-2 md:p-3 rounded-xl duration-200 shadow-sm shadow-gray-400/30 dark:shadow-[#101111]/70 border dark:border-white/5 border-black/5 group"
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
