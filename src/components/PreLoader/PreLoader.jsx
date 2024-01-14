import React from "react";
import { LoaderIconAnimated } from "./LoaderIconAnimated";

const PreLoader = (props) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#050505]">
      {/* <HashLoader
        color={"#FFBF00"}
        loading={props.loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      <LoaderIconAnimated />
    </div>
  );
};

export default PreLoader;
