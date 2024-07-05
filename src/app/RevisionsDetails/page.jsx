import React from "react";
import RevisionComment from "./components/RevisionComment";
import SubmitForm from "../../SharedComponents/SubmitForm";

const RevisionsDetails = () => {
  return (
    <div className="w-full px-[2rem] pb-[5rem] flex justify-between dark:bg-darkMode-body dark:text-black">
      <div className="flex-1">
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
