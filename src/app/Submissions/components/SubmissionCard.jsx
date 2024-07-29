import { Eye, Trash, Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";
import { Divider, toast } from "keep-react";
import formatDate from "../../Home/components/datetime/formatDate";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const SubmissionCard = ({
  id,
  file,
  message,
  sender,
  work,
  created_at,
  claimed_by,
}) => {
  const navigate = useNavigate();
  const { setShowDeleteSubmissionModal } = useStateShareContext();
  const { setSubmissionToDelete } = useProgressBarContext();

  return (
    <>
      <div
        className=" relative p-10 px-[0.7rem] hover:bg-[#f1f1f1] transition-colors duration-300
         dark:bg-darkMode-bars  "
        onClick={() => navigate(`/submissions/${id}`)}
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
            {work.work_code}
          </span>
        </p>
        <p className="text-sm">on {formatDate(created_at)}.</p>

        {/* icons */}
        <button
          className="absolute right-2 text-red-500 hover:text-red-700 transition-colors duration-300 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setSubmissionToDelete(id);
            setShowDeleteSubmissionModal(true);
          }}
        >
          <Trash2Icon size={20} />
        </button>
        <div className={`flex items-center gap-2 absolute bottom-2 left-[57%]`}>
          {claimed_by.registration_number ? (
            <>
              <div className="size-[2rem] bg-red-500 rounded-full overflow-hidden">
                <img
                  src={claimed_by.profile_picture}
                  className="w-full h-full"
                  alt="Profile picture"
                />
              </div>
              <p className="font-medium text-sm text-neutral-600">
                Reviewed by {claimed_by.first_name} {claimed_by.last_name}.
              </p>
            </>
          ) : (
            <div className="font-medium text-right text-sm text-neutral-600 w-full ml-10">
              Not reviewed yet.
            </div>
          )}
        </div>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

export default SubmissionCard;
