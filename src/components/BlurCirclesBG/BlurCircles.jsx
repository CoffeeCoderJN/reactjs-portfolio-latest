import React from "react";

const BlurCircles = () => {
  return (
    <div className="relative w-full max-w-lg -z-0">
      <div className="absolute top-0 -left-4 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-[90px] opacity-60 dark:opacity-60 animate-blob z-0"></div>
      <div className="absolute top-0 -right-4 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-[#7000ff] rounded-full mix-blend-multiply filter blur-[90px] opacity-60 dark:opacity-60 animate-blob animation-delay-2000 z-0"></div>
      {/* <div className="absolute -bottom-8 left-20 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-[#ffee00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-20 animate-blob animation-delay-4000 z-0"></div> */}
      {/* <div className="absolute -bottom-8 left-20 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 z-0"></div> */}
    </div>
  );
};

export default BlurCircles;
