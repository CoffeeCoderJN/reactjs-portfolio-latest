import React from "react";
import Section from "../common/Section";
import MukulImg from "../../assets/mukul.jpg";
import { motion } from "framer-motion";
import Quote from "../quote/Quote";
import { FeaturedCardSection } from "../card/FeaturedCardSection";
import FeaturedCard from "../card/FeaturedCard";
import { FaGraduationCap } from "react-icons/fa";
import RightSvg from "../../assets/svg/right-pattern.svg";
import BlurCircles from "../BlurCirclesBG/BlurCircles";
import { Reveal } from "../utils/Reveal";

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Full Stack Developer"
      className="relative"
    >
      <img
        src={RightSvg}
        alt=""
        className="absolute hidden right-0 bottom-2/3 w-2/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex flex-col min-h-fit text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto items-center md:pt-0 md:pb-16 md:mx-20 z-10"
      >
        <motion.img
          src={MukulImg}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-0 flex-shrink-0 rounded-3xl w-64 h-64 object-cover md:rounded-3xl md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] shadow-lg shadow-gray-400/30 dark:shadow-black/30"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10"
        >
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Here's a Little Background.</Reveal>
          </h4>
          <div className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 ">
            {/* border dark:border-white/5 border-black/10 */}
            <p className="text-base font-light">
              Hi, I am{" "}
              <span className="font-semibold">Mukul Rajendra Dharashivkar</span>{" "}
              and everyone calls me Mukul. I am a{" "}
              <span className="font-semibold">Full Stack Web Developer</span>. I
              am proficient in ReactJS, Spring, Spring Boot, Bootstrap, Tailwind
              CSS and many more. I am looking for new opportunities to implement
              and increase my skills in software development and web
              development.
            </p>
          </div>
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Recent Education.</Reveal>
          </h4>

          {/* Education card */}
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <FaGraduationCap className="h-5 w-5 text-white" />
              </div>
            }
            title="05 August 2022"
            desc="BE in Computer Engineering from PES Modern College of Engineering, Shivajinagar, Pune - 05."
          />
        </motion.div>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background blur circles */}
          <BlurCircles />
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative pt-10 md:pt-5 lg:pt-0"
        >
          <Quote />
        </motion.div>
      </div>

      {/* Featured Card Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <FeaturedCardSection />
      </motion.div>
    </Section>
  );
};

export default About;
