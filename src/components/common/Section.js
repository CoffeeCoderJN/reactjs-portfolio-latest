import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children, className }) => {
  return (
    <section
      id={id}
      className={`min-h-fit flex flex-col justify-start items-center py-16 px-2 md:px-5 text-center ${className}`}
    >
      <motion.h3
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="py-3 text-4xl lg:text-5xl font-bold text-amber-500 uppercase tracking-[1px] ease-in-out"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-xl font-semibold text-gray-400 mb-10 text-sm md:text-base ease-in-out px-5"
      >
        {subtitle}
      </motion.p>
      {children}
    </section>
  );
};

export default Section;
