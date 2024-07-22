import React from "react";
import ListComponent from "./ListComponent";

const QualityIssues = () => {
  return (
    <div className="flex flex-col pt-[1rem] bg-gray-100 px-[1rem] md:px-[2rem] pb-[3rem]">
      <h1 className=" font-semibold mb-4">Quality issues</h1>
      <ul className="text-[15px] ">
        <p className="text-gray-600">No such work found.</p>
        <ListComponent
          index={0}
          content={
            <p>
              Poor quality for work <strong>WK8757</strong> on{" "}
              <i> 22nd March 2024.</i>
            </p>
          }
        />
      </ul>
    </div>
  );
};

export default QualityIssues;
