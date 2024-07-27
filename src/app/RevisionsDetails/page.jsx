import React, { useEffect, useState } from "react";
import RevisionComment from "./components/RevisionComment";
import SubmitForm from "../../SharedComponents/SubmitForm";
import SubmitMessage from "./components/SubmitMessage";
import { useParams } from "react-router-dom";
import instance from "../../axios/instance";
import { toast } from "react-toastify";

const RevisionsDetails = () => {
  const [loading, setLoading] = useState(false);
  const [revisionMessages, setRevisionMessages] = useState([]);
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
      <div className="scrollble relative h-[80%] overflow-y-scroll w-full ">
        {revisionMessages.map((message, index) => {
          return <RevisionComment key={index} {...message} />;
        })}
      </div>
      <div className="bg-red-500 h-[20%]">
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-00">
          jhkh
        </div> */}
        <SubmitMessage />
      </div>
    </div>
  );
};

export default RevisionsDetails;
