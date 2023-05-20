import React from "react";
import youtube from "../assets/youtube.png";
import weather from "../assets/weather.png";
import blog from "../assets/blog.jpg";
import movie from "../assets/movie.jpg";
// import expense from "../assets/expense.png";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
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
    <Section id="about" title="Projects" subtitle="These are some of my best projects.">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="projects container pt-5 mx-auto px-2 md:px-12 lg:px-64 grid md:grid-cols-2 gap-10"
      >
        {projects.map((project, i) => {
          return (
            <div className="flex flex-col border border-transparent rounded-3xl bg-black/5 dark:bg-black/30 duration-300 ease-in-out hover:scale-105 shadow-lg shadow-gray-400/30 dark:shadow-black/40" key={i}>
              <div className="relative p-5" key={i}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-3xl"
                />
              </div>

              <p className="py-5 text-center text-2xl font-semibold px-2 text-violet-500">
                {project.title}
              </p>

              <p className="text-sm font-extralight text-center px-2 pb-5 text-black dark:text-white">
                {project.desc}
              </p>

              <div className="mx-auto pb-10 inline-flex space-x-10 text-4xl">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.live}
                  className="hover:text-violet-600 duration-300 hover:scale-125"
                >
                  <FaExternalLinkSquareAlt />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.code}
                  className="hover:text-violet-600 duration-300 hover:scale-125"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Projects;
