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

          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="sm:hidden flex items-center gap-3"
          >
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

            {/* Dropdown */}
            <ProfileMenu />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden sm:flex justify-between items-center flex-row px-5"
        >
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
