import React from "react";
import pes from "../assets/pesmcoe.png";

const EducationCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center dark:bg-gray-800 bg-gray-300 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center mt-10"
        src={pes}
        alt="college"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">PES Modern College Of Engineering</h4>
        <p className="font-bold text-lg mt-1">BE in Computer ENgineering</p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 ">Started... Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
        </ul>
      </div>

    </article>
  );
};

export default EducationCard;
