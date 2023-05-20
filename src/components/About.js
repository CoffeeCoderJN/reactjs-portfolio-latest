import React from "react";
import Section from "./common/Section";
import MukulImg from "../assets/mukul.jpg";
import { motion } from "framer-motion";
// import commerce from "../assets/commerce.png";
// import research from "../assets/research.png";
import web from "../assets/ux.png";
import backend from "../assets/backend.png";
import freelancing from "../assets/freelancing.png";

const About = () => {
  const services = [
    {
      id: 1,
      image: web,
      title: "Frontend Developer",
    },
    {
      id: 2,
      image: backend,
      title: "Backend Developer",
    },
    {
      id: 3,
      image: freelancing,
      title: "Freelancing",
    },
    // {
    //   id: 4,
    //   image: research,
    //   title: "ECommerce Website",
    // },
  ];

  return (
    <Section id="about" title="Overview" subtitle="Full Stack Developer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col min-h-fit text-center xl:text-left xl:flex-row max-w-7xl px-10 mx-auto items-center md:pt-16 md:pb-16 md:mx-36 xl:mx-48  z-10"
      >
        <motion.img
          src={MukulImg}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] "
        />
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-10 px-0 md:px-10 xl:pt-0 xl:px-20 md:pt-10"
        >
          <h4 className="text-2xl font-light">Here's a Little Background.</h4>
          <div className="bg-black/5 dark:bg-black/30 p-5 rounded-3xl shadow-lg shadow-gray-400/30 dark:shadow-black/40">
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
          <h4 className="text-2xl font-light">Here's what I do.</h4>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            {services.map(({ id, image, title }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center p-5 rounded-3xl duration-300 ease-in-out hover:scale-110 dark:bg-black/30 bg-black/5 shadow-lg shadow-gray-400/30 dark:shadow-black/40"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-20 h-20 md:h-16 md:w-16 object-contain"
                />
                <h3 className="mt-5 text-sm">{title}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;
