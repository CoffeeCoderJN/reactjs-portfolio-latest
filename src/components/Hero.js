import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import avatar from "../assets/programmer.png";
import { TypeAnimation } from "react-type-animation";
import BackgroundCircles from "./BackgroundCircles.js";
import { motion } from "framer-motion";

const Hero = () => {

  window.addEventListener("scroll", function () {
    const downArrow = this.document.querySelector(".down-arrow");

    if (this.scrollY >= 1200) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center p-5 text-center"
    >
      <BackgroundCircles />
      {/* {avatar and resume} */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="z-0 p-5"
      >
        <img
          src={avatar}
          alt="avatar"
          className="w-40 h-40 md:w-44 md:h-44 xl:w-52 xl:h-52 object-cover bg-gradient-to-b from-orange-500 to-orange-800 rounded-3xl"
        />
        <a
          href="/Mukul_Dharashivkar_Resume.pdf"
          download={true}
          className="group flex items-center justify-center mt-10 bg-gradient-to-r from-orange-600 to-blue-700 hover:from-blue-700 hover:to-orange-600 hover:scale-110 duration-300 text-white py-2 rounded-lg z-0 uppercase font-semibold tracking-[3px]"
        >
          Resume{" "}
          <span>
            <MdOutlineKeyboardArrowRight className="text-2xl group-hover:rotate-180 duration-500 mx-1 group-hover:text-black z-0" />
          </span>
        </a>
      </motion.div>

      <h2 className="text-xs md:text-xl text-orange-500 uppercase font-semibold z-0">
        Full Stack Developer
      </h2>

      <div className="py-3 text-2xl lg:text-5xl text-center font-semibold leading-[1] z-0">
        <span className="">
          <TypeAnimation
            sequence={[
              "Welcome👋",
              2000,
              "The Name's Mukul",
              2000,
              "Guy-Who-Loves-Drawing.js",
              2000,
              "<ButLovesToCodeMore/>",
              2000,
            ]}
            speed={30}
            wrapper="span"
            repeat={Infinity}
          />
        </span>
      </div>

      {/* <p className="max-w-xl font-extralight z-0">
        Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my
        site. I am a software engineer from India.
      </p> */}
      {/* SOCIAL ICONS */}
      {/* <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex justify-evenly py-8 text-xs md:text-lg font-light w-full md:w-1/2 xl:w-1/3 z-0 ease-in-out"
      >
        {SOCIAL.map(({ id, link, navLink }) => (
          <Link
            to={link}
            key={id}
            smooth={true}
            offset={40}
            duration={1000}
            className="cursor-pointer duration-300 hover:text-blue-600 font-extralight hover:font-semibold  hover:scale-125 uppercase tracking-[2px] z-50"
          >
            {navLink}
          </Link>
        ))}
      </motion.div> */}

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="z-10"
      >
        <p className="max-w-xl text-xs md:text-xl font-light z-0 uppercase pb-5">
          <span className="text-blue-600 font-semibold">Innovating</span> Web
          Experience
        </p>
      </motion.div>

      {/* {arrow down animation} */}
      <div className="mt-20 mb-0 down-arrow z-0">
        <FaArrowDown className="text-orange-500 text-3xl animate-bounce " />
      </div>
    </section>
  );
};

export default Hero;
