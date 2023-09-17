import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./motion";
import Featured from "./Featured";
import ecommerce from "../../assets/ecommerce.png";
import freepics from "../../assets/freepics.png";
import youtube from "../../assets/youtube.png";
import weather from "../../assets/weather.png";
import blog from "../../assets/blog.jpg";
import movie from "../../assets/movie.jpg";

import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";

export const projectsData = [
  {
    id: 0,
    thumbnail: ecommerce,
    title: "UrbanWear",
    description:
      "Fashion and Lifestyle Ecommerce Website, implemented features like cart, checkout, payment gateway, etc.",
    live: "https://github.com/themukuldharashivkar/Full-Stack-Ecommerce-WebApp",
    code: "https://github.com/themukuldharashivkar/Full-Stack-Ecommerce-WebApp",
    tech: [
      "React.js",
      "Spring Boot",
      //   "Spring Security",
      "MySQL",
      "Tailwind CSS",
    ],
    featured: true,
  },
  {
    id: 1,
    thumbnail: freepics,
    title: "FreePics",
    description:
      "Royalty free image and media sharing website. React JS, Tailwind CSS, Sanity CMS v3",
    live: "https://yt-pixabayclone-6d274.web.app",
    code: "https://github.com/themukuldharashivkar/Pixabay2.0",
    tech: ["React.js", "Tailwind CSS", "Sanity CMS V3", "Firebase"],
    featured: true,
  },
  {
    id: 2,
    thumbnail: youtube,
    title: "UTube",
    description:
      "YouTube web app clone made using ReactJS. Used YouTube v3 Rapid API to fetch videos.",
    live: "https://you-tube-clone-react-js.vercel.app/",
    code: "https://github.com/themukuldharashivkar/YouTube-Clone-ReactJS",
    tech: ["React.js", "Tailwind CSS", "Material UI"],
    featured: false,
  },
  {
    id: 3,
    thumbnail: weather,
    title: "Daily Weather App",
    description:
      "Daily Weather App powered by OpenWeatherMap API. Made using NextJS 13.",
    live: "https://weather-app-nextjs-blue.vercel.app/",
    code: "https://github.com/themukuldharashivkar/weather-app-nextjs",
    tech: ["Next.js 13", "Tailwind CSS", "Stepzen"],
    featured: false,
  },
  {
    id: 4,
    thumbnail: blog,
    title: "Personal Blog",
    description:
      "This is my personal blog website. I have used HTML and Bootstrap CSS for this project. I have used Flask for backend.",
    live: "https://themukuldharashivkar-blog.onrender.com/",
    code: "https://github.com/themukuldharashivkar/personal-mukul-blog-website",
    tech: ["Python", "SQLite", "Flask"],
    featured: false,
  },
  {
    id: 5,
    thumbnail: movie,
    title: "Movie Flix",
    description:
      "Movie Recommender Web App made using Streamlit Framework. Used bag-of-the-words model to recommend movies. ",
    live: "https://github.com/themukuldharashivkar/Movie-Flix",
    code: "https://github.com/themukuldharashivkar/Movie-Flix",
    featured: false,
    tech: ["Machine Learning", "Streamlit"],
  },
  //   {
  //     id: 6,
  //     thumbnail: expense,
  //     title: "Expense Tracker",
  //     description: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
  //     live: "https://expense-tracker-react-9mffr44hp-themukuldharashivkar.vercel.app/",
  //     code: "https://github.com/themukuldharashivkar/Expense-Tracker-ReactJS",
  //     featured: false,
  //     tech: ["React.js", "Context API", "CSS"]
  //   },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Recent projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
