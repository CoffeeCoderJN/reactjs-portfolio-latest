import React, { useState } from "react";
import Label from "./Label";
import { motion } from "framer-motion";
import {CgDetailsMore} from "react-icons/cg";

const SkillsDescription = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:pl-10 text-left pt-5 lg:pt-0"
    >
      <h2 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5 mb-5">
        A look at all the programming languages, libraries, and tools I've
        worked with.
      </h2>
      <p className="text-xs font-light">
        In the expansive field of web development, I've acquired diverse
        experience in programming languages and technology stacks for both
        Back-End and Front-End development. I'm particularly drawn to creating
        full stack applications, with a strong interest in utilizing the
        React.js library alongside the Spring Boot framework.
      </p>

      <h2 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
        Front-End
      </h2>
      <p className="text-xs font-light">
        I love creating something that is clean and minimalistic, attractive and
        has value, and of course, easy to use.
      </p>

      <div className="flex">
        <div className="inline-block h-[170px] md:h-[135px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50 mt-5" />
        <div className="ml-4">
          <h3 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
            React
          </h3>
          <p className="text-xs font-light">
            I really enjoy building web applications and React is my go-to
            library.
          </p>
          <h3 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
            Next.js
          </h3>
          <p className="text-xs font-light">
            Although I'm still relatively new to Next.js, I find it to be a
            highly valuable tool with impressive capabilities. Its quality is
            truly commendable.
          </p>
          {/* <h3 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
            Tailwind CSS
          </h3>
          <p className="text-xs font-light">
            For now, I love using Tailwind CSS for styling, I'm still new to
            Tailwind CSS, but I'm really comfortable using it and I think it's a
            great tool.
          </p> */}
        </div>
      </div>

      <h2 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
        Back-End
      </h2>
      <p className="text-xs font-light">
        I possess a penchant for crafting scalable Back-End code, meticulously
        adhering to established coding standards and best practices.
      </p>
      <div className="flex">
        <div className="inline-block h-[80px] md:h-[70px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50 mt-5" />
        <div className="ml-4">
          <h3 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5">
            Spring Boot
          </h3>
          <p className="text-xs font-light">
            I'm interested in creating various types of applications using
            Spring Boot, including things like online stores and note-taking
            apps.
          </p>
        </div>
      </div>

      {showDetails && (
        <div className="flex flex-col text-left pt-5">
          <div className="h-[1px] mb-5 bg-neutral-300 dark:bg-neutral-500" />
          <h1 className="font-medium text-2xl text-neutral-600 dark:text-neutral-200 ">
            Detail and Summary
          </h1>
          <p className="text-xs font-light pt-1">
            I represent all data in labels to make it easier to read. The
            underline indicator shows how often I used the related item, e.g.:
          </p>

          <div className="flex gap-2 pt-1">
            <Label indicator={100}>Frequently Used</Label>
            <Label indicator={20}>Occasionally</Label>
          </div>

          <h2 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5 mb-1">
            Programming Languages
          </h2>
          <div className="flex gap-2">
            <Label indicator={95}>Java</Label>
            <Label indicator={90}>Python</Label>
            <Label indicator={80}>Javascript</Label>
          </div>

          <h2 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5 mb-1">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            <Label indicator={95}>React.js</Label>
            <Label indicator={60}>Next.js</Label>
            <Label indicator={70}>React Redux</Label>
            <Label indicator={80}>Tailwind</Label>
            <Label indicator={80}>Spring Boot</Label>
            <Label indicator={50}>Hibernate</Label>
            <Label indicator={50}>MySQL</Label>
          </div>

          <h2 className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5 mb-1">
            Softwares and Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            <Label indicator={80}>Git</Label>
            <Label indicator={50}>Linux</Label>
            <Label indicator={90}>GitHub</Label>
            <Label indicator={100}>Eclipse</Label>
            <Label indicator={100}>VS Code</Label>
            <Label indicator={70}>Postman</Label>
            <Label indicator={90}>Pycharm</Label>
          </div>
        </div>
      )}

      <div
        className="flex items-center justify-center"
        onClick={() => setShowDetails(!showDetails)}
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex w-50 text-sm items-center justify-center group mt-10 mb-0 bg-gradient-to-r border-2 border-amber-500 hover:border-transparent hover:from-amber-600 hover:to-amber-500 px-5 py-2 rounded-lg cursor-pointer font-normal tracking-[1px] hover:text-black shadow-lg shadow-gray-400/30 dark:shadow-black/40 bg-white-200 dark:bg-neutral-900"
        >
          {showDetails ? "Hide Details" : "View Details"}
          <CgDetailsMore className="ml-2" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default SkillsDescription;
