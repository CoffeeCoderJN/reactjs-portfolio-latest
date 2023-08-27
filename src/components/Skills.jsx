import React from "react";
import Section from "./common/Section";
import { motion } from "framer-motion";
import java from "../assets/yellow/javay.png";
import spring from "../assets/yellow/springy.png";
import react from "../assets/yellow/reacty.png";
import javascript from "../assets/yellow/javascripty.png";
import mysql from "../assets/yellow/mysqly.png";
import python from "../assets/yellow/pythony.png";
import css from "../assets/yellow/tailwindy.png";
import nextjs from "../assets/yellow/nexty.png";
import redux from "../assets/yellow/reduxy.png";
import ubuntu from "../assets/yellow/ubuntuy.png";
import css3 from "../assets/yellow/css3y.png";
import boot from "../assets/yellow/bootstapy.png";
import git from "../assets/yellow/gity.png";
import postman from "../assets/yellow/postmany.png";
import SkillsDescription from "./skills/SkillsDescription";

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
    image: javascript,
    title: "Javascript",
  },
  {
    id: 4,
    image: react,
    title: "React.js",
  },
  {
    id: 5,
    image: redux,
    title: "React-Redux",
  },
  {
    id: 6,
    image: nextjs,
    title: "Next.js",
  },
  {
    id: 7,
    image: mysql,
    title: "MySQL",
  },
  {
    id: 8,
    image: python,
    title: "Python",
  },
  {
    id: 9,
    image: css,
    title: "Tailwind CSS",
  },
  {
    id: 10,
    image: css3,
    title: "CSS",
  },
  {
    id: 11,
    image: boot,
    title: "Bootstrap CSS",
  },
  {
    id: 12,
    image: ubuntu,
    title: "Ubuntu",
  },
  {
    id: 13,
    image: postman,
    title: "Postman",
  },
  {
    id: 14,
    image: git,
    title: "Git",
  },
];

const Serivces = () => {
  return (
    <Section
      id="skills"
      title="expertise"
      subtitle="I am proficient in performing tasks related to all of the listed skills below."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-20 px-5 md:px-10 lg:px-0">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-5 md:gap-10 grid-cols-3 lg:grid-cols-3 place-items-center md:grid-cols-3 md:pt-8 md:pb-16 md:px-20 lg:px-0"
        >
          {services.map(({ id, image, title }) => (
            <div
              key={id}
              className="group relative flex flex-col items-center justify-center p-5 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-3xl md:rounded-3xl object-cover w-24 h-24 md:w-32 md:h-32 duration-300 ease-in-out dark:bg-neutral-800 bg-gray-200 border dark:border-white/10 border-black/10"
            >
              <img
                src={image}
                alt={title}
                className="w-36 h-36 md:h-44 md:w-44 object-contain group-hover:grayscale"
              />

              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-neutral-500 dark:bg-neutral-700 opacity-0 group-hover:h-full group-hover:opacity-90 duration-300 rounded-3xl  backdrop-filter backdrop-blur-lg">
                <p className="px-2 uppercase text-xs md:text-sm font-bold opacity-0 group-hover:opacity-100 text-white">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <SkillsDescription />
      </div>
    </Section>
  );
};

export default Serivces;
