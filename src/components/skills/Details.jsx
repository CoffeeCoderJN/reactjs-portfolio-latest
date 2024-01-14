import React from "react";
import Label from "./Label";

const Details = () => {
  return (
    <div className="flex flex-col text-left pt-5">
      {/* <div className="h-[1px] mb-5 bg-neutral-300 dark:bg-neutral-500" /> */}
      <h1 className="font-medium text-2xl text-amber-500 dark:text-amber-200">
        Detail and Summary
      </h1>
      <p className="text-sm font-light pt-1">
        I represent all data in labels to make it easier to read. The underline
        indicator shows how often I used the related item, e.g.:
      </p>

      <div className="flex gap-2 pt-1">
        <Label indicator={100}>Frequently Used</Label>
        <Label indicator={20}>Occasionally</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        Programming Languages
      </h2>
      <div className="flex gap-2">
        <Label indicator={95}>Java</Label>
        <Label indicator={90}>Python</Label>
        <Label indicator={80}>Javascript</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        Technologies
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={95}>React.js</Label>
        <Label indicator={95}>React Hooks</Label>
        <Label indicator={60}>Next.js</Label>
        <Label indicator={70}>React Redux</Label>
        <Label indicator={80}>Tailwind CSS</Label>
        <Label indicator={80}>Spring Boot</Label>
        <Label indicator={40}>Spring AOP</Label>
        <Label indicator={60}>Spring Data JPA</Label>
        <Label indicator={50}>Hibernate</Label>
        <Label indicator={50}>MySQL</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        Softwares and Tools
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={80}>Git</Label>
        <Label indicator={70}>Maven</Label>
        <Label indicator={50}>Linux</Label>
        <Label indicator={90}>GitHub</Label>
        <Label indicator={100}>Eclipse</Label>
        <Label indicator={100}>VS Code</Label>
        <Label indicator={70}>Postman</Label>
        <Label indicator={90}>Pycharm</Label>
        <Label indicator={90}>RESTful API</Label>
      </div>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1">
        Soft Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        <Label indicator={100}>Effective Communication</Label>
        <Label indicator={100}>Problem Solving</Label>
        <Label indicator={100}>Creativity</Label>
        <Label indicator={100}>Team Work</Label>
      </div>
    </div>
  );
};

export default Details;
