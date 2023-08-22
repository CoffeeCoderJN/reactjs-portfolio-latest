import React from "react";
import Section from "./common/Section";
import { projects } from "./data/projectData";
import { FaGithub } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Section
      id="about"
      title="Projects"
      subtitle="Recent projects upon which I have worked on."
    >
      <div className="projects container pt-5 mx-auto md:px-12 lg:px-56 grid md:grid-cols-2 gap-10">
        {projects.slice(0, 4).map((project, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-3xl bg-gray-100 dark:bg-[#101111] shadow-lg shadow-gray-400/30 dark:shadow-black/30 ml-5 mr-5 md:m-0 border dark:border-white/5 border-black/5"
              key={i}
            >
              <div className="relative p-5" key={i}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-2xl"
                />
              </div>

              <p className="py-5 text-center text-2xl font-semibold px-2 text-black dark:text-white bg-white dark:bg-black">
                {project.title}
              </p>

              <p className="text-sm font-light text-center px-2 text-black dark:text-white pt-5">
                {project.desc}
              </p>

              <div className="flex items-center justify-center space-x-3 pt-5">
                {project.skills.map((skill, i) => (
                  <div className="bg-white dark:bg-black p-2 rounded-lg border border-neutral-200 dark:border-neutral-900" key={i}>
                    <img className="w-7 h-7 md:w-7 md:h-7 lg:w-10 lg:h-10 object-contain" src={skill} alt="" />
                  </div>
                ))}
              </div>

              <hr className="h-px my-5 bg-black/20 border-0 dark:bg-black"></hr>

              <div className="mx-auto pb-5 flex space-x-2 md:space-x-5 text-2xl md:text-4xl">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.live}
                  className="hover:text-indigo-600"
                >
                  <div className="flex gap-1 bg-white dark:bg-black px-4 py-2 rounded-lg items-center justify-center">
                    <p className="text-xs md:text-sm lg:text-lg">Demo</p>
                    <BiLinkAlt className="text-sm lg:text-xl " />
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.code}
                  className="hover:text-indigo-600"
                >
                  <div className="flex gap-1 bg-white dark:bg-black px-3 py-2 rounded-lg items-center justify-center">
                    <p className="text-xs md:text-sm lg:text-lg">Github</p>
                    <FaGithub className="text-sm lg:text-xl " />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
