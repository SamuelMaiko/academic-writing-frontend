import React from "react";
import Vini from "../../../assets/Vinijr.jpeg";
import PropTypes from "prop-types";
import { content } from "flowbite-react/tailwind";
import formatDate from "../../Home/components/datetime/formatDate";
import relativeTime from "../../Home/components/datetime/RelativeTime";

const RevisionComment = ({
  id,
  image,
  file,
  message,
  sender,
  created_at,
  is_read,
  is_mine,
}) => {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm text-neutral-500 dark:text-sidebartext-hover mb-1">
          By {sender.first_name} {relativeTime(created_at)}
        </p>
        <div className="w-[20rem] bg-neutral-300 rounded-lg overflow-hidden shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
          <img
            className={`${!image ? "hidden" : ""} w-full h-[18rem]`}
            src={image}
            alt=""
          />
          <p className="p-2">{message}</p>
        </div>
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
