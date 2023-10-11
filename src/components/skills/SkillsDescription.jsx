import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const SkillsDescription = () => {
  return (
    <div className="text-left lg:pt-0">
      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-2xl text-amber-500 dark:text-amber-200 mt-5 mb-5"
      >
        <Reveal width="100%">
          A look at all the programming languages, libraries, and tools I've
          worked with.
        </Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light"
      >
        In the expansive field of web development, I've acquired diverse
        experience in programming languages and technology stacks for both{" "}
        <span className="font-semibold">
          Back-End and Front-End development
        </span>
        . I'm particularly drawn to creating{" "}
        <span className="font-semibold">full stack applications</span>, with a
        strong interest in utilizing the React.js library alongside the Spring
        Boot framework.
      </motion.p>

      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5"
      >
        <Reveal width="100%">Front-End</Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light"
      >
        I love creating something that is clean and minimalistic, attractive and
        has value, and of course, easy to use.
      </motion.p>

      <div className="flex">
        {/* <div className="inline-block h-[200px] md:h-[240px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50 mt-5" /> */}
        <div className="">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5"
          >
            React
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light"
          >
            I really enjoy building web applications and React is my go-to
            library.
          </motion.p>
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5"
          >
            Next.js
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light"
          >
            Although I'm still relatively new to Next.js, I find it to be a
            highly valuable tool with impressive capabilities. Its quality is
            truly commendable.
          </motion.p>
          {/* <h3 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
            Tailwind CSS
          </h3>
          <p className="text-sm font-light">
            For now, I love using Tailwind CSS for styling, I'm still new to
            Tailwind CSS, but I'm really comfortable using it and I think it's a
            great tool.
          </p> */}
        </div>
      </div>

      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5"
      >
        <Reveal width="100%">Back-End</Reveal>
      </motion.h2>

      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light"
      >
        I possess a penchant for crafting scalable Back-End code, meticulously
        adhering to established coding standards and best practices.
      </motion.p>
      <div className="flex">
        {/* <div className="inline-block h-[115px] md:h-[120px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50 mt-5" /> */}
        <div className="">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5"
          >
            Spring Boot
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light"
          >
            I'm interested in creating various types of applications using
            Spring Boot, including things like online stores and note-taking
            apps.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SkillsDescription;
