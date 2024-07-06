import React from "react";
import ImageBlock from "./ImageBlock";
import { CloudArrowDown } from "phosphor-react";

const WorkImages = () => {
  return (
    <div>
      <div className="flex justify-between pr-10 md:pr-20 mb-8">
        <h1 className="text-lg font-semibold ">Images</h1>
        <button
          className="text-sm flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400
         transition-colors duration-300 text-black py-1 px-4  font-medium"
        >
          <span>
            <CloudArrowDown size={20} />{" "}
          </span>
          <span>Download all</span>
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-4 md:gap-6 md:px-2">
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
        <ImageBlock />
      </div>
    </div>
  );
};

export default WorkImages;
