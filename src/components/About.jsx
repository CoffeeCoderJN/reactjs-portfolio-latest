import React from "react";
import Section from "./common/Section";
import MukulImg from "../assets/mukul.jpg";
import { motion } from "framer-motion";
// import commerce from "../assets/commerce.png";
// import research from "../assets/research.png";
// import web from "../assets/ux.png";
// import backend from "../assets/backend.png";
// import freelancing from "../assets/freelancing.png";
import Quote from "./quote/Quote";
import { FeaturedCardSection } from "./card/FeaturedCardSection";
import FeaturedCard from "./card/FeaturedCard";
import {FaGraduationCap} from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     image: web,
//     title: "Frontend Developer",
//   },
//   {
//     id: 2,
//     image: backend,
//     title: "Backend Developer",
//   },
//   {
//     id: 3,
//     image: freelancing,
//     title: "Freelancing",
//   },
//   // {
//   //   id: 4,
//   //   image: research,
//   //   title: "ECommerce Website",
//   // },
// ];

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Full Stack Developer"
      className="bg-gradient-to-b bg-[#e2e8f0]/30 dark:bg-neutral-800/30"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col min-h-fit text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto items-center md:pt-0 md:pb-16 md:mx-32 z-10"
      >
        <motion.img
          src={MukulImg}
          initial={{ opacity: 0, x: -100 }}
          transition={{
            duration: 3,
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-0 flex-shrink-0 rounded-3xl w-64 h-64 object-cover md:rounded-3xl md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] shadow-lg shadow-gray-400/30 dark:shadow-black/30"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{
            duration: 3,
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10"
        >
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">Here's a Little Background.</h4>
          <div className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 border dark:border-white/5 border-black/10 ">
            <p className="text-base font-light">
              Hi, I am Mukul Rajendra Dharashivkar and everyone calls me Mukul.
              I am a Full Stack Web Developer. I am proficient in ReactJS,
              Spring, Spring Boot, Bootstrap, Tailwind CSS and many more. I am
              looking for new opportunities to implement and increase my skills
              in software development and web development.
            </p>
          </div>
          {/* <p className="text-base font-extralight">
            I am proficient in ReactJS, Spring, Spring Boot, Bootstrap, Flask,
            Tailwind CSS and many more. In backend I can work in Spring, Spring
            Boot, MySQL, Flask. I am looking for new opportunities to implement
            and increase my skills in software development and web development.
            In my spare time I play cricket and read blogs.
          </p> */}
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">Recent Education.</h4>
          {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {services.map(({ id, image, title }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center p-5 rounded-3xl dark:bg-[#101111] bg-gray-200 shadow-lg shadow-gray-400/50 dark:shadow-black/30 border dark:border-white/5 border-black/10" 
              >
                <div className="p-4 bg-gray-300 dark:bg-neutral-800 rounded-xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-20 h-20 md:h-16 md:w-16 object-contain"
                  />
                </div>
                <h3 className="lg:mt-5 text-xs pt-5 lg:pt-0">{title}</h3>
              </div>
            ))}
          </div> */}

          <FeaturedCard
            icon={
              <div
                className=
                  'rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400'
              >
                <FaGraduationCap className='h-5 w-5 text-white' />
              </div>
            }
            title="05 August 2022"
            desc="BE in Computer Engineering from PES Modern College of Engineering, Shivajinagar, Pune - 05."
          />

        </motion.div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="pt-10 md:pt-5 lg:pt-0"
      >
        <Quote />
      </motion.div>

      {/* Featured Card Section */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
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
