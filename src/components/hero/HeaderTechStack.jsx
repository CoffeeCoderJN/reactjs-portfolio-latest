import { motion } from "framer-motion";

import {
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  VSCodeIcon,
} from "../icon/Icons";

import { SiSpring, SiEclipseide } from "react-icons/si";

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div>
      <motion.p
        className="mb-2.5 text-sm text-slate-600 dark:text-slate-400"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        current favorite tech stack/tools:
      </motion.p>
      <motion.ul
        className="flex items-center gap-3.5 text-slate-700 dark:text-slate-300"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#61DAFB]">
            <ReactIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#06B6D4]">
            <TailwindCssIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiSpring className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]">
            <NextJsIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700" />
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#007ACC]">
            <VSCodeIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#6e50c2]">
            <SiEclipseide className="h-6 w-6" />
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default HeaderTechStack;
