import React from "react";
import Section from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import p1 from "../assets/youtube.png";
import p2 from "../assets/weather.png";
import p3 from "../assets/blog.jpg";
import p4 from "../assets/movie.jpg";
import p5 from "../assets/expense.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "UTube",
      github:
        "https://github.com/themukuldharashivkar/YouTube-Clone-ReactJS",
      demo: "https://you-tube-clone-react-js.vercel.app/",
      description:
        "YouTube web app clone made using ReactJS. Used YouTube v3 Rapid API to fetch videos.",
    },
    {
      id: 2,
      image: p2,
      title: "Daily Weather App",
      github:
        "https://github.com/themukuldharashivkar/weather-app-nextjs",
      demo: "https://weather-app-nextjs-blue.vercel.app/",
      description:
        "Weather App powered by OpenWeatherMap API. Made using NextJS 13.",
    },
    {
      id: 3,
      image: p3,
      title: "Personal Blog",
      github:
        "https://github.com/themukuldharashivkar/personal-mukul-blog-website",
      demo: "https://themukuldharashivkar-blog.onrender.com/",
      description:
        "This is my personal blog website. I have used HTML and Bootstrap CSS for this project. I have used Flask for backend. I have used heroku for hosting.",
    },
    {
      id: 4,
      image: p4,
      title: "Movie Flix",
      github: "https://github.com/themukuldharashivkar/Movie-Flix",
      demo: "https://github.com/themukuldharashivkar/Movie-Flix",
      description:
        "Movie Recommender Web App made using Python Streamlit Framework. Machine Learning project. Used bag-of-the-words model to recommend movies. ",
    },
    {
      id: 5,
      image: p5,
      title: "Expense Tracker",
      github: "https://github.com/themukuldharashivkar/Expense-Tracker-ReactJS",
      demo: "https://expense-tracker-react-9mffr44hp-themukuldharashivkar.vercel.app/",
      description: "Simple expense tracker Web App made using ReactJS",
    },
  ];
  return (
    <Section
      id="portfolio"
      title="Portfolio"
      subtitle="Swipe/Scroll left to see all the projects."
    >
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
      >
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-center snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-amber-500">
          {projects.map(
            ({ id, image, title, github, demo, description }, i) => (
              <div
                key={id}
                className="w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-5 justify-center p-5 ease-in-out"
              >
                <img
                  className="h-36 md:h-64 xl:h-96 rounded-3xl hover:scale-105 duration-300"
                  src={image}
                  alt="project img"
                />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="font-semibold text-2xl text-center">
                    <span className="font-light">Project {i + 1} of {projects.length}:</span> <span className="text-violet-600">{title}</span>
                  </h4>
                  <p className="text-base font-extralight text-center md:text-left md:mx-14 xl:mx-48">
                    {description}
                  </p>
                </div>

                <div className="text-4xl inline-flex space-x-10">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-violet-600 duration-300 hover:scale-125"
                    href={github}
                  >
                    <FaGithub />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-600 duration-300 hover:scale-125 pb-5 md:pb-10"
                    href={demo}
                  >
                    <FaExternalLinkSquareAlt />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </Section>
  );
};

export default Portfolio;
