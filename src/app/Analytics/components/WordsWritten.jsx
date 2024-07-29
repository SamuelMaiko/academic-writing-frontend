import React from "react";
import ListComponent from "./ListComponent";
import formatDate from "../../Home/components/datetime/formatDate";

const WordsWritten = ({ submittedWork, setSubmittedWork }) => {
  return (
    <div className="flex flex-col pt-[1rem] bg-gray-100 px-[1rem] md:px-[2rem] pb-[1rem]">
      <h1 className=" font-semibold mb-4">Words written</h1>
      <ul className="text-[15px] ">
        <p
          className={` ${
            submittedWork && submittedWork.length == 0 ? "" : "hidden"
          } text-gray-600`}
        >
          No such work found.
        </p>

        {submittedWork &&
          submittedWork.map((item, index) => {
            return (
              <ListComponent
                key={index}
                index={index}
                content={
                  <p>
                    <strong>{item.words}</strong> words of Work{" "}
                    <strong>{item.work_code}</strong> on{" "}
                    <i> {formatDate(item.submission.created_at)}.</i>
                  </p>
                }
              />
            );
          })}
      </ul>
    </div>
  );
};

export default WordsWritten;
