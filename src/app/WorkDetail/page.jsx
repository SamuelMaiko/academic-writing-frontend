import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import WorkDetailBlock from "./components/WorkDetailBlock";
import {
  Hash,
  Notepad,
  FileDoc,
  Calendar,
  HourglassMedium,
  ChartPieSlice,
  Warning,
} from "phosphor-react";
import { Badge } from "keep-react";
import WorkImages from "./components/WorkImages";
import WorkFiles from "./components/WorkFiles";

const WorkDetail = () => {
  const IsTakeUp = false;
  return (
    <div className="w-full px-[2rem] dark:bg-darkMode-body ">
      <PageHeader
        title={"Work Details"}
        subTitle={"View all the details of work."}
      />
      <div className="min-h-fit pb-[4rem]">
        <div className=" pr-2">
          <div className="my-2 flex items-center">
            <p className="dark:text-white">Uploaded on Thursday 5.25 pm </p>
            <button
              className={`${
                IsTakeUp ? "hidden" : ""
              } bg-green-500 text-white rounded-lg text-sm py-1 px-3 ml-8`}
            >
              Take Up
            </button>
          </div>
          <WorkDetailBlock icon={<Hash size={22} />} detail="W725" />
          <WorkDetailBlock icon={<Notepad size={22} />} detail="Essay" />
          <WorkDetailBlock icon={<FileDoc size={22} />} detail="2000 words" />
          <WorkDetailBlock
            icon={<Warning size={22} />}
            detail="Make sure the thesis statement is precise and straight to the point and only three lines.
          Make sure the thesis statement is precise and straight to the point and only three lines.
          "
          />
          <WorkDetailBlock
            icon={<Calendar size={22} />}
            detail="Due on 03-05-2025"
          />
          <WorkDetailBlock
            icon={<HourglassMedium size={22} />}
            detail={<p className="text-red-400">00:20:30</p>}
          />
          <WorkDetailBlock
            icon={<ChartPieSlice size={22} />}
            detail={
              <Badge
                color="warning"
                showIcon={true}
                className="dark:text-orange-500"
              >
                In progress
              </Badge>
            }
          />
        </div>
        {/* bottom section */}
        <div className="bg-neutral-100 dark:bg-darkMode-bars dark:text-darkMode-text p-4 my-8">
          <WorkImages />
          <WorkFiles />
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
