import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import SubmissionCard from "./components/SubmissionCard";
import Footer from "../Footer/page";

const Submissions = () => {
  return (
    <div className="w-full px-[1rem] pb-[6rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen">
      <div className="h-full w-full md:w-[70%]">
        <PageHeader
          title={"Your Submissions"}
          subTitle={
            "Manage your submissions. Edit, delete, and check review status along with reviewer details."
          }
        />

        <div>
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
          <SubmissionCard />
        </div>
        <div className="fixed top-[5rem] right-[2rem] md:w-[21%] z-40 overflow-hidden hidden md:block">
          <Footer side={true} />
        </div>
      </div>
    </div>
  );
};

export default Submissions;
