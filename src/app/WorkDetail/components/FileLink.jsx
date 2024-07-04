import { Paperclip } from "phosphor-react";
import React from "react";

const FileLink = ({ filename }) => {
  return (
    <div
      className="text-sm flex items-center gap-2 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 hover:underline
     transition-colors duration-300 mb-2 w-fit
    "
    >
      <span>
        <Paperclip size={20} />
      </span>
      <p>{filename}</p>
    </div>
  );
};

export default FileLink;
