import React from "react";
import RevisionComment from "./components/RevisionComment";
import SubmitForm from "../../SharedComponents/SubmitForm";

const RevisionsDetails = () => {
  return (
    <div
      className="w-full px-4 md:px-[2rem] pb-[5rem] flex flex-col md:flex-row justify-between
     dark:bg-darkMode-body dark:text-black gap-20 md:gap-0"
    >
      <div className="md:flex-1 w-full">
        <RevisionComment
          time="5pm"
          comment="You need to get rid of all this plagiarism ASAP!"
        />
        <RevisionComment
          time="5pm"
          image={"Wow"}
          comment="Look at thiis is what I mean"
        />
      </div>
      <div className="flex-1">
        <SubmitForm />
      </div>
    </div>
  );
};

export default RevisionsDetails;
