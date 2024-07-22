import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import PieActiveArc from "./components/PieActiveArc";
import Block from "./components/Block";
import { Briefcase, Note, Pen, WarningCircle, XCircle } from "phosphor-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ListComponent from "./components/ListComponent";
import SubmittedWork from "./components/SubmittedWork";
import WordsWritten from "./components/WordsWritten";
import RevokedWork from "./components/RevokedWork";
import QualityIssues from "./components/QualityIssues";

const Analytics = () => {
  const percentage = 66;
  return (
    <div className="w-full dark:bg-darkMode-body min-h-screen overflow-hidden">
      <div className="px-[1rem] md:px-[2rem]">
        <PageHeader
          title={"Analytics"}
          subTitle={
            "View your analytics on the system such as written words, submitted work, quality issues."
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-[0.6rem] md:flex md:gap-4 pt-6 bg-gray-100 px-[1rem] md:px-[2rem]">
        <Block
          icon={<Pen size={17} weight="fill" />}
          title={"Assigned Work"}
          value={5}
        />
        <Block
          icon={<Briefcase size={17} weight="fill" />}
          title={"Uptaken Work"}
          value={7}
        />
        <Block
          icon={<Note size={17} weight="fill" />}
          title={"Words Written"}
          value={5000}
        />
        <Block
          icon={<XCircle size={17} weight="fill" />}
          title={"Revoked Work"}
          value={1}
        />
        <Block
          icon={<WarningCircle size={17} weight="fill" />}
          title={"Quality Issues"}
          value={0}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 pt-[2rem] md:pt-[4rem] bg-gray-100 px-[1rem] md:px-[2rem] pb-[3rem]">
        <div className="bg-white h-full p-5 w-full rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.17)]">
          <h1 className=" font-semibold mb-8">Your analytics</h1>
          <div className="">
            <PieActiveArc />
          </div>
        </div>
        <div className="h-[14rem] md:h-[18.6rem] p-5 w-full rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.17)] bg-white">
          <h1 className=" font-semibold ">Quality score</h1>
          <div className="h-[10rem] md:h-[14rem] pt-4">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="h-full "
              styles={buildStyles({
                pathColor: `rgba(10, 199, 10, ${percentage / 100})`,
                textColor: "rgba(10, 220, 10,1)",
                backgroundColor: "red",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
        </div>
      </div>
      <SubmittedWork />
      <WordsWritten />
      <RevokedWork />
      <QualityIssues />
    </div>
  );
};

export default Analytics;
