import React from "react";
import Section from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import p1 from "../assets/blog.jpg";
import p2 from "../assets/movie.jpg";
import p3 from "../assets/tindog.jpg";
import p5 from "../assets/top10.jpg";
import p6 from "../assets/expense.png";
import p7 from "../assets/drum.png";
import p8 from "../assets/simon.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Personal Blog",
      github:
        "https://github.com/themukuldharashivkar/personal-mukul-blog-website",
      demo: "https://themukuldharashivkar-blog.onrender.com/",
      description:
        "This is my personal blog website. I have used HTML and Bootstrap CSS for this project. I have used Flask for backend. I have used heroku for hosting.",
    },
    {
      id: 2,
      image: p2,
      title: "Movie Flix",
      github: "https://github.com/themukuldharashivkar/Movie-Flix",
      demo: "https://github.com/themukuldharashivkar/Movie-Flix",
      description:
        "Movie Recommender Web App made using Python Streamlit Framework. Machine Learning project. Used bag-of-the-words model to recommend movies. ",
    },
    {
      id: 3,
      image: p3,
      title: "Tindog",
      github: "https://github.com/themukuldharashivkar/Tindog-Website",
      demo: "https://tindog-website-chi.vercel.app/",
      description:
        "Tinder for Dogs. This is a website made using HTML, CSS and Bootstrap. I have used Bootstrap for making this website responsive.",
    },
    {
      id: 4,
      image: p5,
      title: "Top 10 Movies",
      github: "https://github.com/themukuldharashivkar/Top-10-Movie-Website",
      demo: "https://movies-list.onrender.com/",
      description:
        "Top 10 Movies web app made using Flask Web Framework for the backend.",
    },
    {
      id: 5,
      image: p6,
      title: "Expense Tracker",
      github: "https://github.com/themukuldharashivkar/Expense-Tracker-ReactJS",
      demo: "https://expense-tracker-react-9mffr44hp-themukuldharashivkar.vercel.app/",
      description: "Simple expense tracker Web App made using ReactJS",
    },
    {
      id: 6,
      image: p7,
      title: "Drum Set",
      github:
        "https://github.com/themukuldharashivkar/Drum-Set-Website-using-JavaScript",
      demo: "https://super-gecko-c5a330.netlify.app",
      description:
        "Just a simple drum set website made using HTML, CSS and Vanilla JavaScript",
    },
    {
      id: 7,
      image: p8,
      title: "Simon Game",
      github:
        "https://github.com/themukuldharashivkar/Simon-Game-using-JavaScript-and-jQuery",
      demo: "https://simon-game-jquery-md.netlify.app/",
      description: "Simon Game made using HTML, CSS and Vanilla Bootstrap",
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
        whileInView={{ opacity: 1, x:0 }}
        viewport={{once:true}}
        className="relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center "
      >
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500">
          {projects.map(
            ({ id, image, title, github, demo, description }, i) => (
              <div
                key={id}
                className="w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-5 justify-center p-5"
              >
                <img
                  className="h-44 md:h-64 xl:h-96 rounded-3xl hover:scale-105 duration-300"
                  src={image}
                  alt="project img"
                />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="font-semibold text-2xl text-center">
                    <span className="font-light">Project {i + 1} of {projects.length}:</span> <span className="text-blue-600">{title}</span>
                  </h4>
                  <p className="text-base font-extralight text-center md:text-left md:mx-14 xl:mx-48">
                    {description}
                  </p>
                </div>

                <div className="text-4xl inline-flex space-x-10">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-600 duration-300 hover:scale-125"
                    href={github}
                  >
                    <FaGithub />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 duration-300 hover:scale-125 pb-5 md:pb-10"
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
