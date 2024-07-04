import React from "react";
import FileLink from "./FileLink";

const WorkFiles = () => {
  return (
    <div className="mt-10">
      <h1 className="text-lg font-semibold mb-3">Files</h1>
      <div>
        <FileLink filename={"extrawork.txt"} />
        <FileLink filename={"example.txt"} />
      </div>
    </div>
  );
};

export default WorkFiles;
