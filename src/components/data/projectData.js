import youtube from "../../assets/youtube.png";
import weather from "../../assets/weather.png";
import blog from "../../assets/blog.jpg";
import freepics from "../../assets/freepics.png";
import ecommerce from "../../assets/ecommerce.png";

import spring from "../../assets/spring.png";
import react from "../../assets/react.png";
import javascript from "../../assets/js.png";
import mysql from "../../assets/mysql.png";
import python from "../../assets/python.png";
import css from "../../assets/css.png";
import css3 from "../../assets/css3.png";
import nextjs from "../../assets/nextjs.png";
import redux from "../../assets/redux.png";

export const projects = [
  {
    id: 0,
    img: ecommerce,
    title: "UrbanWear",
    desc: "Fashion and Lifestyle Ecommerce Website, implemented features like cart, checkout, payment gateway, etc.",
    live: "https://github.com/themukuldharashivkar/Pixabay2.0",
    code: "https://github.com/themukuldharashivkar/Pixabay2.0",
    skills: [react, spring, redux, css, mysql],
  },
  {
    id: 1,
    img: freepics,
    title: "FreePics",
    desc: "Royalty free image and media sharing website. React JS, Tailwind CSS, Sanity CMS v3",
    live: "https://yt-pixabayclone-6d274.web.app",
    code: "https://github.com/themukuldharashivkar/Pixabay2.0",
    skills: [react, css, redux],
  },
  {
    id: 2,
    img: youtube,
    title: "UTube",
    desc: "YouTube web app clone made using ReactJS. Used YouTube v3 Rapid API to fetch videos.",
    live: "https://you-tube-clone-react-js.vercel.app/",
    code: "https://github.com/themukuldharashivkar/YouTube-Clone-ReactJS",
    skills: [react, css, javascript],
  },
  {
    id: 3,
    img: weather,
    title: "Daily Weather App",
    desc: "Daily Weather App powered by OpenWeatherMap API. Made using NextJS 13.",
    live: "https://weather-app-nextjs-blue.vercel.app/",
    code: "https://github.com/themukuldharashivkar/weather-app-nextjs",
    skills: [nextjs, javascript, react, css],
  },
  {
    id: 4,
    img: blog,
    title: "Personal Blog",
    desc: "This is my personal blog website. I have used HTML and Bootstrap CSS for this project. I have used Flask for backend.",
    live: "https://themukuldharashivkar-blog.onrender.com/",
    code: "https://github.com/themukuldharashivkar/personal-mukul-blog-website",
    skills: [python, mysql, css3],
  },
  // {
  //   img: movie,
  //   title: "Movie Flix",
  //   desc: "Movie Recommender Web App made using Python Streamlit Framework. Machine Learning project. Used bag-of-the-words model to recommend movies. ",
  //   live: "https://github.com/themukuldharashivkar/Movie-Flix",
  //   code: "https://github.com/themukuldharashivkar/Movie-Flix",
  // },
  // {
  //   img: expense,
  //   title: "Expense Tracker",
  //   desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
  //   live: "https://expense-tracker-react-9mffr44hp-themukuldharashivkar.vercel.app/",
  //   code: "https://github.com/themukuldharashivkar/Expense-Tracker-ReactJS",
  // },
];
