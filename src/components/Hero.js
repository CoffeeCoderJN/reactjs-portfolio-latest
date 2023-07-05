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
          className="w-40 h-40 md:w-44 md:h-44 xl:w-52 xl:h-52 object-cover bg-gradient-to-b from-amber-500 to-amber-700 rounded-3xl shadow-lg shadow-gray-400/30 dark:shadow-black/40"
        />
        <a
          href="/Mukul_Dharashivkar_Resume.pdf"
          download={true}
          className="group flex items-center justify-center mt-10 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-500 hover:scale-110 duration-300 text-white py-2 rounded-xl z-0 uppercase font-semibold tracking-[1px] hover:text-black shadow-lg shadow-gray-400/30 dark:shadow-black/40"
        >
          Resume{" "}
          <span>
            <MdOutlineKeyboardArrowRight className="text-2xl group-hover:rotate-180 duration-500 mx-1 group-hover:text-black z-0" />
          </span>
        </a>
      </motion.div>

      <h2 className="text-xs pt-3 md:text-xl text-amber-500 uppercase font-bold z-0">
        Full Stack Developer
      </h2>

      <div className="py-3 text-xl md:text-3xl lg:text-5xl text-center font-bold leading-[1] z-0">
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

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="z-10"
      >
        <p className="max-w-xl text-xs md:text-xl font-semibold z-0 uppercase pb-5">
          <span className="text-violet-600 font-semibold">Innovating</span> Web
          Experience
        </p>
      </motion.div>

      {/* {arrow down animation} */}
      {/* <div className="mt-20 mb-0 down-arrow z-0">
        <FaArrowDown className="text-amber-500 text-3xl animate-bounce " />
      </div> */}
    </section>
  );
};

export default Hero;
