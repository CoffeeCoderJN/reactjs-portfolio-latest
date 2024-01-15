import React from "react";
import Section from "../common/Section";
import FeaturedCardSection from "./FeaturedCardSection";
import SwitchableSection from "./SwitchableSection";

import classes from "./About.module.css";

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Full Stack Developer"
      className="relative"
    >
      {/* <img
        src={RightSvg}
        alt=""
        className="absolute hidden right-0 bottom-[40%] w-2/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
      /> */}

      <div id={classes.heroshape}>
        <div id={classes.hero1}></div>
        <div id={classes.hero2}></div>
        <div id={classes.hero3}></div>
      </div>
      {/* <AboutDetailsSection /> */}
      <SwitchableSection />
      {/* <EducationSection /> */}
      {/* <QuoteSection /> */}
      {/* Featured Card Section */}
      <FeaturedCardSection />
    </Section>
  );
};

export default About;
