import React, { useEffect, useRef, useState } from "react";
import Vini from "../../../assets/Vinijr.jpeg";
import PropTypes from "prop-types";
import { content } from "flowbite-react/tailwind";
import formatDate from "../../Home/components/datetime/formatDate";
import relativeTime from "../../Home/components/datetime/RelativeTime";
import { Checks } from "phosphor-react";
import { ArrowDown, ChevronDown, File, Plus } from "lucide-react";
import { Divider } from "keep-react";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";

const RevisionComment = ({
  id,
  image,
  file,
  message,
  sender,
  created_at,
  is_read,
  is_mine,
  revisionMessages,
  setRevisionMessages,
  setDeleting,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [showChevronDown, setShowChevronDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const deleteMessage = async () => {
    setLoading(true);
    try {
      setDeleting(true);
      const response = await instance.delete(
        `/revisions/delete-message/${id}/`
      );
      setOpenDropDown(false);
      // removing from state
      const updatedMessages = revisionMessages.filter(
        (message) => message.id != id
      );
      setRevisionMessages(updatedMessages);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 403:
            toast.warning("Not allowed.");
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
      setDeleting(false);
    }
  };

  // toggling dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenDropDown(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex ${is_mine ? "justify-end" : "justify-start"} relative`}
    >
      <div className="mb-8">
        <p className="text-sm text-neutral-500 dark:text-sidebartext-hover mb-1">
          {is_mine ? "You" : sender.first_name} {relativeTime(created_at)}
        </p>
        <div
          ref={ref}
          onMouseEnter={() => setShowChevronDown(true)}
          onMouseLeave={() => setShowChevronDown(false)}
          className={`w-[20rem] ${
            is_mine ? "bg-blue-100" : "bg-neutral-100"
          } rounded-lg overflow-hidden shadow-[2px_2px_4px_rgba(0,0,0,0.2)] relative`}
        >
          <img
            className={`${!image ? "hidden" : ""} w-full h-[18rem]`}
            src={image}
            alt=""
          />

          {/*chevron */}
          <ChevronDown
            onClick={() => setOpenDropDown(true)}
            size={25}
            className={`${
              !showChevronDown ? "translate-x-7" : ""
            } text-red-500 cursor-pointer transition-transform duration-300  absolute  right-2 ${
              file ? "-top-1" : "top-2"
            }`}
          />

          <div
            className={`${
              !file ? "hidden" : ""
            } flex justify-between items-center p-3 `}
          >
            <div>
              <File size={28} fill="gray" className="text-gray-600" />
            </div>
            <div>
              <p className="text-sm">Solar pump occasional.jpg</p>
              <div className="text-sm mt-1">JPG &#183; 110kB</div>
            </div>
            <div>
              <button className="p-1 rounded-full border-[2px] border-neutral-500 text-neutral-500">
                <ArrowDown size={24} className="text-neutral-500" />
              </button>
            </div>
          </div>
          <p className="p-2 text-[13px] font-opensans font-medium">{message}</p>
          <div className="flex justify-between px-2">
            <div></div>
            <Checks
              size={23}
              className={`${is_read ? "text-blue-400" : "text-neutral-500"} ${
                !is_mine ? "hidden" : ""
              }`}
            />
          </div>
        </div>
      </div>
      {/* the dropdown */}
      <div
        onMouseEnter={() => setOpenDropDown(true)}
        onMouseLeave={() => setOpenDropDown(false)}
        className={`${
          openDropDown ? "" : "hidden"
        } w-[7rem] h-[10rem] rounded-lg bg-neutral-50 absolute top-12  z-50
       shadow-[-2px_2px_8px_rgba(0,0,0,0.3)] ${
         !is_mine ? "left-[20%]" : "right-2"
       }`}
      >
        <>
          <button
            onClick={(e) => {
              alert("downloaded");
              e.stopPropagation();
            }}
            className="text-sm py-2 text-left w-full bg-white  hover:bg-gray-200
             dark:bg-darkMode-body flex items-center gap-1 px-4 transition-colors duration-300 "
          >
            Download
          </button>
          <Divider />
        </>
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteMessage();
            }}
            className={`text-sm py-2 text-left w-full bg-white  hover:bg-gray-200
             dark:bg-darkMode-body flex items-center gap-1 px-4 transition-colors duration-300 ${
               !is_mine ? "hidden" : ""
             }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Delete"}
          </button>
          <Divider />
        </>
      </div>
    </div>
  );
};

RevisionComment.propTypes = {
  image: PropTypes.string,
  comment: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default RevisionComment;
