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
} from "phosphor-react";
import { Badge } from "keep-react";

const WorkDetail = () => {
  const IsTakeUp = false;
  return (
    <div className="w-full px-[2rem] dark:bg-darkMode-body min-h-screen">
      <PageHeader
        title={"Work Details"}
        subTitle={"View all the details of work."}
      />
      <div>
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
    </div>
  );
};

export default WorkDetail;
