import { Download, Eye, Paperclip } from "phosphor-react";
import React from "react";

const FileLink = ({ file_name, file }) => {
  return (
    <div className="flex justify-between">
      <div
        className="text-sm flex items-center gap-2 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 hover:underline
      transition-colors duration-300 mb-2 w-fit
    "
      >
        <span>
          <Paperclip size={20} />
        </span>
        <p className="whitespace-nowrap">{file_name}</p>
        {/* <a href={file} target="blank"> */}
        {/* </a> */}
      </div>
      <div className="flex gap-4 ml-5 mr-[60%]">
        <a href={file} target="blank">
          <Eye
            size={20}
            className="cursor-pointer text-black hover:text-[#4caf50] dark:text-white
          dark:hover:text-[#90ee90] transition-colors duration"
          />
        </a>
        <a href={file} download={file_name} className="">
          <Download
            size={20}
            className="cursor-pointer text-black hover:text-[#4caf50] dark:text-white
          dark:hover:text-[#90ee90] transition-colors duration"
          />
        </a>
      </div>
    </div>
  );
};

export default FileLink;
