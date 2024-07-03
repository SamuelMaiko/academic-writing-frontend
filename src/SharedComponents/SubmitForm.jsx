import { Textarea } from "keep-react";
import React from "react";
import { Info, Trash } from "phosphor-react";
import { useCallback, useState } from "react";
import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from "keep-react";
import folder from "../assets/folder.svg";

const SubmitForm = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  return (
    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-200 px-3 py-4">
      <h1 className="text-xl font-semibold text-center">Submit Work</h1>

      <div className="my-4">
        <Upload horizontal options={{ onDrop }}>
          <UploadBody className="dark:bg-darkMode-cardBg hover:dark:bg-darkMode-cardHover">
            <UploadIcon>
              <img src={folder} alt="folder" />
            </UploadIcon>
            <UploadText className="">
              <p className="text-body-3 font-medium text-metal-600 dark:text-white">
                Choose File to Upload
              </p>
              <p className="text-body-4 font-normal text-metal-400 dark:text-sidebartext-hover">
                PDF and JPG formats
              </p>
            </UploadText>
          </UploadBody>
          <UploadFooter isFileExists={files.length > 0}>
            <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600 dark:text-metal-300">
              <Info size={16} />
              Uploaded Files
            </p>
            <ul className="space-y-1">
              {files?.map((file) => (
                <li
                  key={file?.name}
                  className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600 dark:bg-metal-800 dark:text-metal-300 "
                >
                  {file?.name}
                  <Trash size={16} color="red" />
                </li>
              ))}
            </ul>
          </UploadFooter>
        </Upload>
      </div>

      <div>
        <label htmlFor="">Comment</label>
        <Textarea placeholder="Write your comment here." rows={8} />
      </div>
      <input
        className="bg-green-700 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer"
        type="button"
        value="Submit"
      />
    </div>
  );
};

export default SubmitForm;
