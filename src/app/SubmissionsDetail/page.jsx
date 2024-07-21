import React, { useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import { Textarea } from "keep-react";
import FileLink from "../WorkDetail/components/FileLink";
import { Trash2 } from "lucide-react";

const SubmissionsDetail = () => {
  const [files, setFiles] = useState(null);

  const handleUploadFile = (e) => {
    e.preventDefault();
    setFiles("hello");
  };

  const handleDeleteFile = (e) => {
    e.preventDefault();
    setFiles(null);
  };
  return (
    <div className="w-full px-[2rem] pb-[5rem] dark:bg-darkMode-body ">
      <PageHeader
        title={"Submission Details"}
        subTitle={"View all the details of a submission."}
      />
      <div>
        <form className="mt-[2rem]">
          <div>
            <label htmlFor="">Comment</label>
            <Textarea
              placeholder="Write your comment here."
              rows={8}
              className="mt-2 md:w-[60%] bg-blue-100"
            />
          </div>
          <input
            className="bg-green-700 hover:bg-green-600 transition-colors duration-300 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer"
            type="submit"
            value="Save"
          />
        </form>
        <div className="flex flex-col gap-5 mt-[3rem] ">
          <h3 className="font-medium ">File</h3>
          <div className={`flex gap-8 ${!files ? "hidden" : ""}`}>
            <FileLink filename={"extrawork.txt"} />
            <Trash2
              size={20}
              onClick={handleDeleteFile}
              className="text-red-500 hover:text-red-700 transition-colors duration-300 cursor-pointer"
            />
          </div>
          <form
            onSubmit={handleUploadFile}
            className={`${!files ? "" : "hidden"}`}
          >
            <p className="text-gray-500 mb-2">No file.</p>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <input
                id="picture"
                type="file"
                className="flex h-10 w-full rounded-md border border-input bg-blue-100 px-3 py-2 text-sm
                 text-gray-400 file:border-0 file:bg-white file:text-gray-600 file:text-sm file:font-medium"
              />
            </div>
            <input
              className="bg-blue-700 hover:bg-blue-600 transition-colors duration-300 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer"
              type="submit"
              value="Upload"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmissionsDetail;
