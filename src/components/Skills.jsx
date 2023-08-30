import React from "react";
import Section from "./common/Section";
import SkillsDescription from "./skills/SkillsDescription";
import Details from "./skills/Details";

import LeftSvg from "../assets/svg/left-pattern.svg";
import SkillsMarquee from "./skills/SkillsMarquee";

const Serivces = () => {
  return (
    <Section
      id="skills"
      title="expertise"
      subtitle="I am proficient in performing tasks related to all of the listed skills below."
      className="relative"
    >
      <img
        src={LeftSvg}
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="md:px-20 px-5 lg:px-0 overflow-x-hidden max-w-[24rem] md:max-w-[50rem] lg:max-w-[75rem] xl:max-w-[80rem]">
        {/* <motion.div
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-5 md:gap-10 grid-cols-4 lg:grid-cols-9 place-items-center md:grid-cols-5 md:pt-8 md:pb-16 md:px-20 lg:px-0"
        >
          {services.map(({ id, image, title }) => (
            <div
              key={id}
              className="group relative flex flex-col items-center justify-center p-3 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-xl object-cover w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 duration-300 ease-in-out dark:bg-neutral-800 bg-gray-100 border dark:border-white/10 border-black/10"
            >
              <img
                src={image}
                alt={title}
                className="w-36 h-36 md:h-44 md:w-44 object-contain group-hover:grayscale"
              />

              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-neutral-500 dark:bg-neutral-700 opacity-0 group-hover:h-full group-hover:opacity-90 duration-300 rounded-xl  backdrop-filter backdrop-blur-lg">
                <p className="px-2 uppercase text-xs font-bold opacity-0 group-hover:opacity-100 text-white">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </motion.div> */}
        <SkillsMarquee />
      </div>

      <div className="md:mx-10 lg:px-20 px-5 grid grid-cols-1 md:grid-cols-2 md:space-x-5">
        <Details />
        <SkillsDescription />
      </div>
    </Section>
  );
};

export default Serivces;
