import { Eye, Trash, Trash2Icon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";
import { Divider } from "keep-react";

const SubmissionCard = () => {
  const navigate = useNavigate();
  const { setShowDeleteSubmissionModal } = useStateShareContext();
  return (
    <>
      <div
        className=" relative p-8 px-[0.7rem] hover:bg-[#f1f1f1] transition-colors duration-300
         dark:bg-darkMode-bars  "
        onClick={() => navigate("/submissions/1")}
      >
        <p className="mb-2">
          Submission for work
          <span
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="ml-1 font-semibold hover:underline hover:text-blue-500
           transition-colors duration-300 cursor-pointer"
          >
            WK2265
          </span>
        </p>
        <p className="text-sm">on 23 March 2024 at 5.30pm.</p>

        {/* icons */}
        <Trash2Icon
          size={20}
          className="absolute right-2 text-red-500 hover:text-red-700 transition-colors duration-300 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setShowDeleteSubmissionModal(true);
          }}
        />
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default SubmissionCard;
