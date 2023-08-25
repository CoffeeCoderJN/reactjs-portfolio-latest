import React from "react";
import Section from "./common/Section";
import { motion } from "framer-motion";
import java from "../assets/java.png";
import spring from "../assets/spring.png";
import react from "../assets/react.png";
import javascript from "../assets/js.png";
import jquery from "../assets/jquery.png";
import mysql from "../assets/mysql.png";
import python from "../assets/python.png";
import css from "../assets/css.png";
import css3 from "../assets/css3.png";
import nextjs from "../assets/nextjs.png";
import boot from "../assets/boot.png";
import redux from "../assets/redux.png";

const Serivces = () => {
  const services = [
    {
      id: 1,
      image: java,
      title: "Java",
    },
    {
      id: 2,
      image: spring,
      title: "Spring Boot",
    },
    {
      id: 3,
      image: react,
      title: "React.js",
    },
    {
      id: 4,
      image: javascript,
      title: "Javascript",
    },
    {
      id: 5,
      image: jquery,
      title: "jQuery",
    },
    {
      id: 6,
      image: mysql,
      title: "MySQL",
    },
    {
      id: 7,
      image: python,
      title: "Python",
    },
    {
      id: 8,
      image: nextjs,
      title: "Next.js",
    },
    {
      id: 9,
      image: css3,
      title: "CSS",
    },
    {
      id: 10,
      image: css,
      title: "Tailwind CSS",
    },
    {
      id: 11,
      image: boot,
      title: "Bootstrap CSS",
    },
    {
      id: 12,
      image: redux,
      title: "React-Redux",
    },
  ];

  return (
    <Section
      id="skills"
      title="expertise"
      subtitle="I am proficient in performing tasks related to all of the listed skills below."
      className="bg-gradient-to-b from-[#e2e8f0]/30 to-white dark:from-neutral-800/20 dark:to-neutral-900"
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid gap-5 md:gap-10 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 md:pt-8 md:pb-16"
      >
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="group relative flex flex-col items-center justify-center p-5 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-3xl md:rounded-3xl object-cover w-32 h-32 md:w-32 md:h-32 duration-300 ease-in-out dark:bg-[#101111] bg-gray-200 border dark:border-white/5 border-black/10"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:h-44 md:w-44 object-contain group-hover:grayscale"
            />

            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-neutral-500 opacity-0 group-hover:h-full group-hover:opacity-90 duration-300 rounded-3xl  backdrop-filter backdrop-blur-lg">
              <p className="uppercase text-sm font-bold opacity-0 group-hover:opacity-100 text-white">{title}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Serivces;
