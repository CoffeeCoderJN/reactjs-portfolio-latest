import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children, className }) => {
  const animationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id={id}
      className={`min-h-fit flex flex-col justify-start items-center py-16 px-2 md:px-5 text-center ${className}`}
    >
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        transition={{
          duration: 0.9,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="py-3 text-4xl lg:text-5xl font-bold text-amber-500 uppercase tracking-[1px] ease-in-out"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        transition={{
          duration: 0.9,
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
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
