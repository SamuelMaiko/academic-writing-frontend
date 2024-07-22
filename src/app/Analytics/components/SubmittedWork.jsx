import React from "react";
import ListComponent from "./ListComponent";

const SubmittedWork = () => {
  return (
    <div className="flex flex-col pt-[1rem] bg-gray-100 px-[1rem] md:px-[2rem] pb-[1rem]">
      <h1 className=" font-semibold mb-4">Submitted work</h1>
      <ul className="text-[15px] ">
        <p className="text-gray-600">No such work found.</p>
        <ListComponent
          index={0}
          content={
            <p>
              Work <strong>WK8757</strong> submitted on <i> 22nd March 2024.</i>
            </p>
          }
        />
        <ListComponent
          index={1}
          content={
            <p>
              Work <strong>WK8757</strong> submitted on <i> 22nd March 2024.</i>
            </p>
          }
        />
      </ul>
    </div>
  );
};

export default SubmittedWork;
