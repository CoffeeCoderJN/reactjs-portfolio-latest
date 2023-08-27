import React from "react";

const Details = () => {
  return (
    <div className="flex flex-col justify-start md:ml-10 lg:ml-20 px-2 md:px-5">
      <h1 className="font-medium text-2xl text-neutral-600 dark:text-neutral-200 ">
        Detail and Summary
      </h1>
      <p className="text-xs font-light">
        I represent all data in labels to make it easier to read. The underline
        indicator shows how often I used the related item, e.g.:
      </p>
    </div>
  );
};

export default Details;
