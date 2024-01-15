import { useState } from "react";
import Mukul from "../../assets/mukul.jpg";
import College from "../../assets/modern-college.jpg";
import Certificate from "../../assets/certificate.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { animation } from "../common/Section";

const SwitchableSection = () => {
  const [activeLink, setActiveLink] = useState("Overview");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="mx-4 md:mx-20 w-[86%] flex flex-col items-center lg:flex-row h-1/2 rounded-xl bg-white/70 dark:bg-[#101111]/70 backdrop-filter backdrop-blur-lg bg-opacity-30 ease-in-out text-neutral-500 shadow-xl shadow-gray-400/50 dark:shadow-black/30 text-left z-30 mb-10">
      {/* Vertical Navbar */}
      <div className="w-full md:w-[70%] p-5 md:px-3 lg:px-20">
        <ul className="text-3xl md:text-5xl font-light">
          <motion.li
            initial={animation.hide}
            whileInView={animation.show}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className={`cursor-pointer ${
              activeLink === "Overview"
                ? "text-amber-500 font-bold text-3xl md:text-5xl"
                : "dark:hover:text-neutral-200 hover:text-neutral-700 transition-colors"
            }`}
            onClick={() => handleLinkClick("Overview")}
          >
            Overview
          </motion.li>
          <motion.li
            initial={animation.hide}
            whileInView={animation.show}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className={`cursor-pointer ${
              activeLink === "Education"
                ? "text-amber-500 font-bold text-3xl md:text-5xl"
                : "dark:hover:text-neutral-200 hover:text-neutral-700 transition-colors"
            }`}
            onClick={() => handleLinkClick("Education")}
          >
            Education
          </motion.li>
          <motion.li
            initial={animation.hide}
            whileInView={animation.show}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className={`cursor-pointer ${
              activeLink === "Courses"
                ? "text-amber-500 font-bold text-3xl md:text-5xl"
                : "dark:hover:text-neutral-200 hover:text-neutral-700 transition-colors"
            }`}
            onClick={() => handleLinkClick("Courses")}
          >
            Courses
          </motion.li>
        </ul>

        {/* Content */}
        <div className="pt-10">
          {/* Display information based on the active link */}
          {activeLink === "Overview" && (
            <p className="text-sm font-light text-gray-800 dark:text-gray-300">
              Hi there, my name is{" "}
              <span className="font-semibold text-black dark:text-white">
                Mukul Dharashivkar
              </span>
              , I am 23 years old. Even from a young age, I liked computer
              technology; I was always interested in the news and trends of IT
              technologies with great pleasure. Then I realized that I really
              wanted to develop myself in the IT direction because this field is
              developing very dynamically, and I wanted to keep up with the
              times. The further I went, the more inspiration and the desire to
              study programming in more depth came to me. <br />
              <br /> I am an{" "}
              <span className="font-semibold text-black dark:text-white">
                open-minded and determined person
              </span>
              . I learn quickly, and I enjoy acquiring new knowledge. I believe
              that by working for you, I will be able to contribute something
              new and valuable to your teams. In turn, I will apply all my
              knowledge to make the company even more promising, and the team
              more productive and friendly. <br />
              <br />{" "}
              <span className="font-semibold text-black dark:text-white">
                I'm a team player.
              </span>
            </p>
          )}
          {activeLink === "Education" && (
            <ul className="text-sm font-light text-gray-800 dark:text-gray-300 space-y-5">
              <li>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="" />
                  <p>August 2022</p>
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  BE in Computer Engineering
                </h3>
                <h4>From PES Modern College of Engineering, Pune</h4>
                <p className="text-amber-500 font-medium">7.71 CGPA</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="" />
                  <p>February 2017</p>
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  12th Grade HSC
                </h3>
                <h4>
                  From PVG's Muktangan English School and Jr. College, Pune
                </h4>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="" />
                  <p>March 2015</p>
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  10th Grade SSC
                </h3>
                <h4>
                  From PVG's Muktangan English School and Jr. College, Pune
                </h4>
              </li>
            </ul>
          )}
          {activeLink === "Courses" && (
            <ul className="text-sm font-light text-gray-800 dark:text-gray-300 space-y-5">
              <li>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="" />
                  <p>February 2023 - July 2023</p>
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  React - The Complete Guide 2023
                </h3>
                <h4>From Udemy</h4>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="" />
                  <p> December 2022 - May 2023</p>
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  Master Spring Boot 3 and Spring Framework 6
                </h3>
                <h4>Udemy</h4>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="" />
                  <p>August 2022 - October 2022</p>
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  100 Days of Code: The Python Pro Boot Camp
                </h3>
                <h4>Udemy</h4>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="m-5">
        {activeLink === "Overview" && (
          <img
            src={Mukul}
            alt=""
            loading="lazy"
            className="rounded-xl w-80 h-64 md:w-[32rem] md:h-[32rem] object-contain bg-gradient-to-br from-[#4ED0FD] to-[#121DD2] "
          />
        )}
        {activeLink === "Education" && (
          <img
            src={College}
            alt=""
            loading="lazy"
            className="rounded-xl w-80 h-64 md:w-[32rem] md:h-[32rem] object-cover "
          />
        )}
        {activeLink === "Courses" && (
          <img
            src={Certificate}
            alt=""
            loading="lazy"
            className="rounded-xl w-80 h-64 md:w-[32rem] md:h-[32rem] object-contain bg-neutral-100 "
          />
        )}
      </div>
    </div>
  );
};
export default SwitchableSection;
