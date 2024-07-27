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
import folder from "../../../assets/folder.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import { SendHorizontal } from "lucide-react";

const SubmitMessage = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const id = 20;
  //

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
  }, []);

  const handleSubmitMessage = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("message", message);

    if (message == "") {
      setError("Please provide a comment.");
      setLoading(false);
    } else {
      try {
        const response = await instance.post(`/work/${id}/submit/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success("Message sent.");

        navigate(-1);
      } catch (error) {
        if (error.response && error.response.status) {
          const status = error.response.status;
          const message = error.response.data;

          switch (status) {
            case 400:
              setError("Please provide a comment.");
              break;
            case 500:
              setError(`Server Error: ${message}`);
              break;
            default:
              setError(`Error: ${message}`);
              break;
          }
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-200 px-3 ">
      {/* <h1 className="text-xl font-semibold text-center">Submit Message</h1> */}
      <div className="flex justify-between items-center">
        <div className="">
          <Upload horizontal options={{ onDrop }} className="flex ">
            <UploadBody className="dark:bg-darkMode-cardBg hover:dark:bg-darkMode-cardHover h-[2rem]">
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
            <UploadFooter isFileExists={file != null} className="hidden">
              <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600 dark:text-metal-300">
                <Info size={16} />
                Uploaded File
              </p>
              <ul className="space-y-1">
                {file != null ? (
                  <li
                    key={file?.name}
                    className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25
                     px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600
                      dark:bg-metal-800 dark:text-metal-300 "
                  >
                    {file?.name}
                    <Trash
                      onClick={() => setFile(null)}
                      size={17}
                      className="cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-300"
                    />
                  </li>
                ) : (
                  <span></span>
                )}
              </ul>
            </UploadFooter>
          </Upload>
        </div>

        <div className="w-[50%]">
          {/* <label htmlFor="message">Message</label> */}
          <Textarea
            id="message"
            placeholder="Write your message here."
            className="w-full"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmitMessage}
          className="bg-green-700 rounded-full text-white flex items-center cursor-pointer p-4"
          disabled={loading}
        >
          <SendHorizontal size={28} />
        </button>
      </div>
    </div>
  );
};

export default SubmitMessage;
