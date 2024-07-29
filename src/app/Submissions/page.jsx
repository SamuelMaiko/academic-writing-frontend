import React, { useEffect, useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import SubmissionCard from "./components/SubmissionCard";
import Footer from "../Footer/page";
import instance from "../../axios/instance";
import { toast } from "react-toastify";
import { useProgressBarContext } from "../../Context/ProgressBarContext";

const Submissions = () => {
  const { submissions, setSubmissions } = useProgressBarContext();
  const [loading, setLoading] = useState(false);

  const getSubmissions = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/submissions/`);
      setSubmissions(response.data);
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
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
    getSubmissions();
  }, []);

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
          {submissions &&
            submissions.map((item, index) => {
              return <SubmissionCard key={index} {...item} />;
            })}
        </div>
        <div className="fixed top-[5rem] right-[2rem] md:w-[21%] z-40 overflow-hidden hidden md:block">
          <Footer side={true} />
        </div>
      </div>
    </div>
  );
};

export default Submissions;
