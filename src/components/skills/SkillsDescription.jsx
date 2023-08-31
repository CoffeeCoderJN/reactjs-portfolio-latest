import React from "react";
import { motion } from "framer-motion";

const SkillsDescription = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-left lg:pt-0"
    >
      <h2 className="font-medium text-2xl text-amber-600 dark:text-amber-200 mt-5 mb-5">
        A look at all the programming languages, libraries, and tools I've
        worked with.
      </h2>
      <p className="text-sm font-light">
        In the expansive field of web development, I've acquired diverse
        experience in programming languages and technology stacks for both{" "}
         <span className="font-semibold">
           Back-End and Front-End development
        </span>
        . I'm particularly drawn to creating{" "}
        <span className="font-semibold">full stack applications</span>, with a
        strong interest in utilizing the React.js library alongside the Spring
        Boot framework.
      </p>

      <h2 className="font-medium text-lg text-amber-600 dark:text-amber-200 mt-5">
        Front-End
      </h2>
      <p className="text-sm font-light">
        I love creating something that is clean and minimalistic, attractive and
        has value, and of course, easy to use.
      </p>

      <div className="flex">
        {/* <div className="inline-block h-[200px] md:h-[240px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50 mt-5" /> */}
        <div className="">
          <h3 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
            React
          </h3>
          <p className="text-sm font-light">
            I really enjoy building web applications and React is my go-to
            library.
          </p>
          <h3 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
            Next.js
          </h3>
          <p className="text-sm font-light">
            Although I'm still relatively new to Next.js, I find it to be a
            highly valuable tool with impressive capabilities. Its quality is
            truly commendable.
          </p>
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

      <h2 className="font-medium text-lg text-amber-600 dark:text-amber-200 mt-5">
        Back-End
      </h2>
      <p className="text-sm font-light">
        I possess a penchant for crafting scalable Back-End code, meticulously
        adhering to established coding standards and best practices.
      </p>
      <div className="flex">
        {/* <div className="inline-block h-[115px] md:h-[120px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50 mt-5" /> */}
        <div className="">
          <h3 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
            Spring Boot
          </h3>
          <p className="text-sm font-light">
            I'm interested in creating various types of applications using
            Spring Boot, including things like online stores and note-taking
            apps.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsDescription;
