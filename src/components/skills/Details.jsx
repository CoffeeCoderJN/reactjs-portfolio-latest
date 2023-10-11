import React from "react";
import Label from "./Label";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const Details = () => {
  return (
    <div className="flex flex-col text-left pt-5">
      {/* <div className="h-[1px] mb-5 bg-neutral-300 dark:bg-neutral-500" /> */}
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-2xl text-amber-500 dark:text-amber-200"
      >
        <Reveal width="100%">Detail and Summary</Reveal>
      </motion.h1>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light pt-1"
      >
        I represent all data in labels to make it easier to read. The underline
        indicator shows how often I used the related item, e.g.:
      </motion.p>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex gap-2 pt-1"
      >
        <Label indicator={100}>Frequently Used</Label>
        <Label indicator={20}>Occasionally</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1"
      >
        <Reveal width="100%">Programming Languages</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex gap-2"
      >
        <Label indicator={95}>Java</Label>
        <Label indicator={90}>Python</Label>
        <Label indicator={80}>Javascript</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1"
      >
        <Reveal width="100%">Technologies</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        <Label indicator={95}>React.js</Label>
        <Label indicator={60}>Next.js</Label>
        <Label indicator={70}>React Redux</Label>
        <Label indicator={80}>Tailwind</Label>
        <Label indicator={80}>Spring Boot</Label>
        <Label indicator={50}>Hibernate</Label>
        <Label indicator={50}>MySQL</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1"
      >
        <Reveal width="100%">Softwares and Tools</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        <Label indicator={80}>Git</Label>
        <Label indicator={50}>Linux</Label>
        <Label indicator={90}>GitHub</Label>
        <Label indicator={100}>Eclipse</Label>
        <Label indicator={100}>VS Code</Label>
        <Label indicator={70}>Postman</Label>
        <Label indicator={90}>Pycharm</Label>
      </motion.div>
    </div>
  );
};

export default Details;
