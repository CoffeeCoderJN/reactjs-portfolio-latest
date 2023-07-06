import React from "react";
import youtube from "../assets/youtube.png";
import weather from "../assets/weather.png";
import blog from "../assets/blog.jpg";
import movie from "../assets/movie.jpg";
// import expense from "../assets/expense.png";
import Section from "./common/Section";

import { FaGithub } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      img: youtube,
      title: "UTube",
      desc: "YouTube web app clone made using ReactJS. Used YouTube v3 Rapid API to fetch videos.",
      live: "https://you-tube-clone-react-js.vercel.app/",
      code: "https://github.com/themukuldharashivkar/YouTube-Clone-ReactJS",
    },
    {
      img: weather,
      title: "Daily Weather App",
      desc: "Weather App powered by OpenWeatherMap API. Made using NextJS 13.",
      live: "https://weather-app-nextjs-blue.vercel.app/",
      code: "https://github.com/themukuldharashivkar/weather-app-nextjs",
    },
    {
      img: blog,
      title: "Personal Blog",
      desc: "This is my personal blog website. I have used HTML and Bootstrap CSS for this project. I have used Flask for backend. I have used heroku for hosting.",
      live: "https://themukuldharashivkar-blog.onrender.com/",
      code: "https://github.com/themukuldharashivkar/personal-mukul-blog-website",
    },
    {
      img: movie,
      title: "Movie Flix",
      desc: "Movie Recommender Web App made using Python Streamlit Framework. Machine Learning project. Used bag-of-the-words model to recommend movies. ",
      live: "https://github.com/themukuldharashivkar/Movie-Flix",
      code: "https://github.com/themukuldharashivkar/Movie-Flix",
    },
    // {
    //   img: expense,
    //   title: "Expense Tracker",
    //   desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
    //   live: "https://expense-tracker-react-9mffr44hp-themukuldharashivkar.vercel.app/",
    //   code: "https://github.com/themukuldharashivkar/Expense-Tracker-ReactJS",
    // },
  ];

  return (
    <Section
      id="about"
      title="Projects"
      subtitle="These are some of my best projects."
    >
      <div className="projects container pt-5 mx-auto px-2 md:px-12 lg:px-56 grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-3xl bg-black/10 dark:bg-[#101111] duration-300 ease-in-out shadow-lg shadow-gray-400/30 dark:shadow-black ml-5 mr-5 md:m-0 border dark:border-white/5 border-black/5"
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

              <p className="text-sm font-extralight text-center px-2 text-black dark:text-white pt-5">
                {project.desc}
              </p>

              <hr className="h-px my-5 bg-black/20 border-0 dark:bg-black"></hr>

              <div className="mx-auto pb-5 flex flex-row space-x-5 text-2xl md:text-4xl">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.live}
                  className="hover:text-violet-600"
                >
                  <div className="flex flex-row gap-1 bg-white dark:bg-black px-3 py-2 rounded-lg">
                    <p className="text-sm lg:text-lg">Link</p>
                    <BiLinkAlt className="text-sm lg:text-xl m-1" />
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.code}
                  className="hover:text-violet-600"
                >
                  <div className="flex flex-row gap-1 bg-white dark:bg-black px-3 py-2 rounded-lg">
                    <p className="text-sm lg:text-lg">Github</p>
                    <FaGithub className="text-sm lg:text-xl m-1" />
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
