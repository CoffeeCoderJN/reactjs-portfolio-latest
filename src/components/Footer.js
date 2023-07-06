import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
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
    <section className="min-h-fit flex flex-col justify-start py-12 px-5 text-center dark:bg-[#101111] bg-gray-200">
      <div className="flex flex-row justify-between items-center ml-2 mr-2 md:ml-10 md:mr-10  text-xs md:text-lg">
        <p className="max-w-xl font-light uppercase">
          ©2023 - Mukul Dharashivkar ❤️{" "}
        </p>
        <div className="gap-2 md:gap-5 flex flex-row md:text-xl">
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
