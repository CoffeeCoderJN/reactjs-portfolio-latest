import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";

const AnimatedDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 p-2 md:p-3 dark:bg-amber-600/10 bg-amber-200/70 rounded-full dark:hover:bg-amber-600/20 hover:bg-amber-200/90 transition-colors"
      >
        <span className="font-medium text-sm">Menu</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-gray-50 dark:bg-neutral-900 shadow-xl absolute top-[120%] -left-[10%] w-48 overflow-hidden"
      >
        <Option
          setOpen={setOpen}
          Icon={IoMdContact}
          to="about"
          smooth={true}
          offset={-30}
          duration={800}
        >
          Overview
        </Option>
        <Option
          setOpen={setOpen}
          Icon={FaCode}
          to="projects"
          smooth={true}
          offset={-40}
          duration={800}
        >
          Projects
        </Option>
        <Option
          setOpen={setOpen}
          Icon={FaLaptopCode}
          to="skills"
          smooth={true}
          offset={-40}
          duration={800}
        >
          Expertise
        </Option>
        <Option
          setOpen={setOpen}
          Icon={GrContactInfo}
          to="contact"
          smooth={true}
          offset={-40}
          duration={800}
        >
          Contact
        </Option>
        {/* <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
        <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
        <Option setOpen={setOpen} Icon={FiShare} text="Share" />
        <Option setOpen={setOpen} Icon={FiTrash} text="Remove" /> */}
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ Icon, setOpen, children, smooth, offset, duration, to }) => {
  return (
    <motion.li variants={itemVariants}>
      <Link
        to={to}
        smooth={smooth}
        offset={offset}
        duration={duration}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-amber-100 dark:hover:bg-amber-500/50 text-neutral-700 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-amber-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        {children}
      </Link>
    </motion.li>
  );
};

export default AnimatedDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
