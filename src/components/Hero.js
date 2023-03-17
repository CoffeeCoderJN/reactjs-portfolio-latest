import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import avatar from "../assets/programmer.png";
import { TypeAnimation } from "react-type-animation";
import BackgroundCircles from "./BackgroundCircles.js";
import {Link} from "react-scroll";

const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "about",
      navLink: "About",
    },
    { id: 2, link: "skills", navLink: "Skills", },
    {
      id: 3,
      link: "portfolio",
      navLink: "Portfolio",
    },
    { id: 4, link: "contact", navLink: "Contact", },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = this.document.querySelector(".down-arrow");

    if (this.scrollY >= 1200) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center p-5 text-center">
      <BackgroundCircles />
      <h2 className="text-4xl lg:text-5xl text-orange-500 uppercase font-bold z-0">
        Mukul Dharashivkar
      </h2>
      
      <div className="py-3 text-2xl font-semibold uppercase leading-[1] z-0">
        <span className="mr-4">I'm a</span>
        <TypeAnimation
          sequence={[
            "Full Stack Developer.",
            2000,
            "Freelancer.",
            2000,
            "Computer Engineer.",
            2000,
          ]}
          speed={30}
          className="text-blue-600"
          wrapper="span"
          repeat={Infinity}
        />
      </div>

        {/* {avatar and resume} */}
      <div className="z-0 p-5">
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-72 md:h-72 xl:w-80 xl:h-80 sm:pt-5 object-cover bg-gradient-to-b from-orange-500 to-orange-800 rounded-3xl pt-5"
        />
        <a
          href="/Mukul_Dharashivkar_Resume.pdf"
          download={true}
          className="group flex items-center justify-center mt-10 bg-gradient-to-r from-orange-600 to-blue-700 hover:scale-125 duration-300 text-white py-2 rounded-lg z-0 uppercase font-semibold tracking-[3px]"
        >
          Resume{" "}
          <span>
            <MdOutlineKeyboardArrowRight className="text-2xl group-hover:rotate-180 duration-500 mx-1 group-hover:text-black z-0" />
          </span>
        </a>
      </div>

      {/* <p className="max-w-xl font-extralight z-0">
        Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my
        site. I am a software engineer from India.
      </p> */}
      {/* SOCIAL ICONS */}
      <div className="flex justify-evenly py-8 lg:py-10 text-sm md:text-lg font-light w-full md:w-1/2 xl:w-1/3 z-0">
        {SOCIAL.map(({ id, link, navLink }) => (
          <Link
            to={link}
            key={id}
            smooth={true}
            offset={40}
            duration={1000}
            className="cursor-pointer duration-300 hover:text-blue-600 font-extralight hover:font-semibold  hover:scale-110 uppercase tracking-[2px]"
          >
            {navLink}
          </Link>
        ))}
      </div>
      {/* <div className="flex justify-evenly py-8 lg:py-10 text-xl font-light w-full md:w-1/3 z-0">
        {SOCIAL.map(({ id, link, navLink }) => (
          <a
            href={link}
            key={id}
            className="cursor-pointer duration-300 hover:text-blue-600 hover:font-semibold  hover:scale-110"
          >
            {navLink}
          </a>
        ))}
      </div> */}
      

      {/* {arrow down animation} */}
      <div className="mt-5 mb-0 down-arrow z-0">
        <FaArrowDown className="text-orange-500 text-3xl animate-bounce " />
      </div>
    </section>
  );
};

export default Hero;
