import React from "react";
import Section from "./common/Section";
import EducationCard from "./EducationCard";

const Education = () => {
  return <Section  id="education" title="Education" subtitle="Schools/Colleges that I have attained">
    <div className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500">
            <EducationCard />
            <EducationCard />
            <EducationCard />
            <EducationCard />
        </div>
    </div>
  </Section>;
};

export default Education;
