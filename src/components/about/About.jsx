import React from "react";
import Section from "../common/Section";
import RightSvg from "../../assets/svg/right-pattern.svg";
import QuoteSection from "./QuoteSection";
import FeaturedCardSection from "./FeaturedCardSection";
import SwitchableSection from "./SwitchableSection";

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Full Stack Developer"
      className="relative"
    >
      <img
        src={RightSvg}
        alt=""
        className="absolute hidden right-0 bottom-[40%] w-2/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
      />
      {/* <AboutDetailsSection /> */}
      <SwitchableSection />
      {/* <EducationSection /> */}
      <QuoteSection />
      {/* Featured Card Section */}
      <FeaturedCardSection />
    </Section>
  );
};

export default About;
