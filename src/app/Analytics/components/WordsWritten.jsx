import React from "react";
import ListComponent from "./ListComponent";

const WordsWritten = () => {
  return (
    <div className="flex flex-col pt-[1rem] bg-gray-100 px-[1rem] md:px-[2rem] pb-[1rem]">
      <h1 className=" font-semibold mb-4">Words written</h1>
      <ul className="text-[15px] ">
        <p className="text-gray-600">No such work found.</p>
        <ListComponent
          index={0}
          content={
            <p>
              <strong>1500</strong> words of Work <strong>WK8757</strong> on{" "}
              <i> 22nd March 2024.</i>
            </p>
          }
        />
        <ListComponent
          index={1}
          content={
            <p>
              <strong>2000</strong> words of Work <strong>WK8757</strong> on{" "}
              <i> 22nd March 2024.</i>
            </p>
          }
        />
      </ul>
    </div>
  );
};

export default WordsWritten;
