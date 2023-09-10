import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center z-30 ">
      <div onClick={() => setOpen(!open)} className="relative">
        <button
          //   onClick={() => setOpen(true)}
          className="flex items-center p-2 md:p-3 dark:bg-[#101111] bg-gray-100 border dark:border-white/5 border-black/5 rounded-xl"
        >
          <span className="mr-2 text-sm md:text-base">Menu</span>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg> */}
          <AiOutlineCaretDown className="w-4 h-4" />
        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg z-40 shadow-lg bg-gray-100 dark:bg-[#0d0c0e] backdrop-blur-xl duration-700 ease-in-out border dark:border-white/5 border-black/5 ${
            open ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
              href="https://mukuldharashivkar-blog.vercel.app/"
            >
              Blogs
            </a>
          </li>
          <li className="">
            <Link
              to="about"
              smooth={true}
              offset={-30}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Expertise
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
