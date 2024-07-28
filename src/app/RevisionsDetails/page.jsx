import React, { useEffect, useState } from "react";
import RevisionComment from "./components/RevisionComment";
import SubmitForm from "../../SharedComponents/SubmitForm";
import SubmitMessage from "./components/SubmitMessage";
import { useParams } from "react-router-dom";
import instance from "../../axios/instance";
import { toast } from "react-toastify";
import { File, X } from "lucide-react";

const RevisionsDetails = () => {
  const [loading, setLoading] = useState(false);
  const [revisionMessages, setRevisionMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  // getting revision id
  const { id } = useParams();

  const getRevisionDetails = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/revisions/${id}/`);
      setRevisionMessages(response.data.messages);
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 404:
            console.log(message);
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            toast.error(`Error: ${message}`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRevisionDetails();
  }, []);

  return (
    <div
      className="w-full h-[calc(100vh-6rem)] relative px-4 md:px-[2rem]
       flex flex-col justify-between
     dark:bg-darkMode-body dark:text-black md:gap-0 overflow-hidden"
    >
      <div
        className={`${
          file != null || image != null
            ? "overflow-hidden"
            : "overflow-y-scroll"
        } scrollble relative h-[80%]  w-full `}
      >
        {revisionMessages.map((message, index) => {
          return <RevisionComment key={index} {...message} />;
        })}

        <div
          className={`${
            file != null || image != null ? "" : "hidden"
          } bg-[#F0F0F0] h-full top-0 bottom-0 absolute right-0
       left-0 z-[100]`}
        >
          <div className="flex items-center py-3 relative">
            {/* cancel button */}
            <button
              onClick={() => {
                setImage(null);
                setFile(null);
              }}
              className="rounded-full  p-2
             absolute left-0 top-1/2 -translate-y-1/2 text-gray-600"
            >
              <X size={22} strokeWidth={2} />
            </button>
            <p className="text-center text-[15px] w-full">
              {file && file.name}
              {image && image.name}
            </p>
          </div>
          <div className="w-full h-full flex items-center">
            {/* image viewer */}
            <div
              className={`${
                image == null ? "hidden" : ""
              } w-[40%] mx-auto h-[23rem] bg-gray-200 flex items-center
           justify-between flex-col gap-2 rounded-xl`}
            >
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  className="w-full h-full "
                  alt="Preview"
                />
              )}
            </div>
            {/* file viewer */}
            <div
              className={`${
                file == null ? "hidden" : ""
              } w-[40%] mx-auto h-[18rem] bg-gray-200 flex items-center
           justify-between flex-col py-14 gap-2 rounded-xl`}
            >
              <File
                size={130}
                strokeWidth={0.1}
                className="text-gray-400"
                fill="white"
              />
              <div className="flex flex-col items-center">
                <p className="text-gray-400 font-medium text-xl">
                  No preview available
                </p>
                <p className="text-gray-400 text-sm ">
                  {/* {file && Math.ceil(file.size / 1024)}kB -{" "} */}
                  {file && Math.ceil(file?.size / 1024) > 1024
                    ? Math.round(Math.ceil(file?.size / 1024) / 1024) +
                      " " +
                      "MB"
                    : Math.ceil(file?.size / 1024) + " " + "kB"}
                  <span className="uppercase">
                    {" "}
                    - {file?.name.split(".").at(-1)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500 h-[20%]">
        <SubmitMessage
          file={file}
          setFile={setFile}
          image={image}
          setImage={setImage}
        />
      </div>
    </div>
  );
};

export default RevisionsDetails;
