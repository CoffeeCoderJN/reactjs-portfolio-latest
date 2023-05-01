import React from "react";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

const PortfolioCard = (props) => {
  return (
    <div
      key={props.id}
      className="w-screen snap-center flex-shrink-0 snap-x flex flex-col items-center space-y-5 justify-center p-5"
    >
      <img
        className="h-36 md:h-64 xl:h-96 rounded-3xl hover:scale-105 duration-300"
        src={props.image}
        alt="project img"
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="font-semibold text-2xl text-center">
          <span className="font-light">
            Project {props.i + 1} of {props.length}:
          </span>{" "}
          <span className="text-violet-600">{props.title}</span>
        </h4>
        <p className="text-base font-extralight text-center md:text-left md:mx-14 xl:mx-48">
          {props.description}
        </p>
      </div>

      <div className="text-4xl inline-flex space-x-10">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-violet-600 duration-300 hover:scale-125"
          href={props.github}
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 duration-300 hover:scale-125 pb-5 md:pb-10"
          href={props.demo}
        >
          <FaExternalLinkSquareAlt />
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
