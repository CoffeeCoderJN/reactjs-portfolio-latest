import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useReadingProgress } from "../hooks/useReadingProgress";
// import useOnScroll from "../hooks/useOnScroll";
import ProfileMenu from "./ProfileMenu";

const HeaderNav = ({ darkMode, setDarkMode }) => {
  // const [showMenu, setShowMenu] = useState(false);
  const completion = useReadingProgress();
  // const isScrolled = useOnScroll(0);

  // function toggleMenu() {
  //   if (!showMenu) {
  //     setShowMenu(true);
  //   } else {
  //     setShowMenu(false);
  //   }
  // }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div
        className={`fixed inset-x-0 block sm:flex sm:justify-between sm:items-center  text-gray-900 dark:text-white top-0 z-40  md:justify-around py-3 md:py-2 bg-white/70 dark:bg-[#0d0c0e]/70  backdrop-filter backdrop-blur-lg bg-opacity-30 ease-in-out duration-700`}
      >
        {/* Progressbar */}
        <span
          id="progress-bar"
          style={{
            transform: `translateX(${completion - 100}%)`,
          }}
          className={`absolute top-0 w-full transition-transform duration-300 h-[2px] bg-amber-500 dark:bg-amber-500 rounded-xl`}
        />

        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center md:ml-5 px-4 sm:px-0">
          <Link to="hero" smooth={true} offset={-70} duration={800}>
            <motion.h1
              initial={{ x: -500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl text-neutral-600 dark:text-neutral-300 font-normal cursor-pointer"
            >
              mukul<span className="font-extrabold text-amber-500">.dev</span>
            </motion.h1>
          </Link>
          {/* Small screen hamburger menu */}
          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="sm:hidden flex items-center gap-3"
          >
            {/* Theme switcher small screen */}

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Theme Switcher"
              className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark cursor-pointer dark:bg-[#101111] bg-gray-100 p-2 md:p-3 rounded-xl duration-200 shadow-sm shadow-gray-400/30 dark:shadow-[#101111]/70 group"
            >
              {darkMode ? (
                <FiSun className="text-xl md:text-2xl cursor-pointer text-gray-200 group-hover:text-amber-400 duration-150" />
              ) : (
                <FiMoon className="text-xl md:text-2xl cursor-pointer text-gray-600 group-hover:text-indigo-500 duration-150" />
              )}
            </motion.div>

            {/* <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none dark:bg-[#101111] bg-gray-100 p-1 md:p-3 rounded-xl duration-200 shadow-sm shadow-gray-400/30 dark:shadow-[#101111]/70 border dark:border-white/5 border-black/5"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light flex items-center"
              >
                {showMenu ? (
                  <FiX className="text-2xl" />
                ) : (
                  <FiMenu className="text-2xl" />
                )}
              </svg>
            </button> */}
            <ProfileMenu />
          </motion.div>
        </div>

        {/* Header links small screen */}
        {/* <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center sm:shadow-none"
              : "hidden"
          }
        >
          <a
            href="https://mukuldharashivkar-blog.vercel.app/"
            onClick={toggleMenu}
            className="block text-left text-lg text-neutral-600 dark:text-neutral-200 hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-neutral-200 dark:border-neutral-700 cursor-pointer"
            aria-label="Blog"
          >
            Blogs
          </a>
          <Link
            to="about"
            smooth={true}
            offset={-40}
            duration={800}
            onClick={toggleMenu}
            className="block text-left text-lg text-neutral-600 dark:text-neutral-200 hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-neutral-200 dark:border-neutral-700 cursor-pointer"
            aria-label="About Me"
          >
            Overview
          </Link>
          <Link
            to="skills"
            smooth={true}
            offset={-40}
            duration={800}
            onClick={toggleMenu}
            className="block text-left text-lg text-neutral-600 dark:text-neutral-200 hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-neutral-200 dark:border-neutral-700 cursor-pointer"
            aria-label="About Me"
          >
            Expertise
          </Link>
          <Link
            to="projects"
            smooth={true}
            offset={-40}
            duration={800}
            onClick={toggleMenu}
            className="block text-left text-lg text-neutral-600 dark:text-neutral-200 hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-neutral-200 dark:border-neutral-700 cursor-pointer"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-40}
            duration={800}
            onClick={toggleMenu}
            className="block text-left text-lg text-neutral-600 dark:text-neutral-200 hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-neutral-200 dark:border-neutral-700 cursor-pointer"
            aria-label="Contact"
          >
            Contact
          </Link>
        </div> */}

        {/* Header links large screen */}

        {/* Header right section buttons */}
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden sm:flex justify-between items-center flex-row px-5"
        >
          {/* <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 shadow-lg sm:shadow-none">
            <a
              href="https://mukuldharashivkar-blog.vercel.app/"
              className="block text-left text-sm text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-2 mb-2 sm:py-2 cursor-pointer dark:hover:bg-amber-500 hover:bg-amber-200 hover:px-1 duration-200 rounded-md"
              aria-label="Blogs"
            >
              Blogs
            </a>
            <Link
              to="about"
              smooth={true}
              offset={-30}
              duration={800}
              className="block text-left text-sm text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-2 mb-2 sm:py-2 cursor-pointer dark:hover:bg-amber-500 hover:bg-amber-200 hover:px-1 duration-200 rounded-md"
              aria-label="About Me"
            >
              Overview
            </Link>
            <Link
              to="skills"
              smooth={true}
              offset={-60}
              duration={800}
              className="block text-left text-sm text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-2 mb-2 sm:py-2 cursor-pointer hover:scale-105 dark:hover:bg-amber-500 hover:bg-amber-200 hover:px-1 duration-200 rounded-md"
              aria-label="About Me"
            >
              Expertise
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-60}
              duration={800}
              className="block text-left text-sm text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-2 mb-2 sm:py-2 cursor-pointer hover:scale-105 dark:hover:bg-amber-500 hover:bg-amber-200 hover:px-1 duration-200 rounded-md"
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-60}
              duration={800}
              className="block text-left text-sm text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-2 mb-2 sm:py-2 cursor-pointer hover:scale-105 dark:hover:bg-amber-500 hover:bg-amber-200 hover:px-1 duration-200 rounded-md"
              aria-label="Contact"
            >
              Contact
            </Link>
          </div> */}

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Theme Switcher"
            className="ml-4 bg-primary-light dark:bg-ternary-dark cursor-pointer dark:bg-[#101111] bg-gray-100 p-2 md:p-3 rounded-xl shadow-sm shadow-gray-400/30 dark:shadow-[#101111]/70 group"
          >
            {darkMode ? (
              <FiSun className="text-xl md:text-2xl cursor-pointer text-gray-200 group-hover:text-amber-400 duration-150" />
            ) : (
              <FiMoon className="text-xl md:text-2xl cursor-pointer text-gray-600 group-hover:text-indigo-500 duration-150" />
            )}
          </motion.div>

          <div className="ml-5">
            <ProfileMenu />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default HeaderNav;
