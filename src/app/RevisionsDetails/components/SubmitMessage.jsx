import { Textarea } from "keep-react";
import React from "react";
import { Info, Trash, X } from "phosphor-react";
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
import { File, Image, SendHorizontal } from "lucide-react";

const SubmitMessage = ({ file, setFile, image, setImage }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const id = 20;
  //

  // const onDrop = useCallback((acceptedFiles) => {
  //   setFile(acceptedFiles[0]);
  //   // console.log(acceptedFiles[0]);
  // }, []);

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

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      // setImage(URL.createObjectURL(selectedFile));
      setImage(selectedFile);
      console.log("Here", selectedFile);
    } else {
      alert("Please select a valid image file");
    }
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log("Fil", selectedFile);
  };

  return (
    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-200 px-3 ">
      {/* <h1 className="text-xl font-semibold text-center">Submit Message</h1> */}
      <div className="flex justify-between items-center">
        <div
          className={`${
            file != null ? "hidden" : ""
          } flex items-center cursor-pointer`}
        >
          <label
            onClick={() => setFile(null)}
            htmlFor="image-upload"
            className="flex items-center cursor-pointer"
          >
            <Image className="text-blue-500" size={24} />
            {/* <span className="ml-2 text-blue-500">Upload Image</span> */}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <div
          className={`flex items-center cursor-pointer ${
            image != null ? "hidden" : ""
          }`}
        >
          <label
            onClick={() => setImage(null)}
            htmlFor="file-upload"
            className="flex items-center cursor-pointer"
          >
            <File className="text-blue-500" size={24} />
            {/* <span className="ml-2 text-blue-500">Upload Image</span> */}
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
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
