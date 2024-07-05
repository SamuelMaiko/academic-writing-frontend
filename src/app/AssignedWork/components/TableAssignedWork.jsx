import React from "react";
import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableHead,
  // TableHeadCell,
} from "keep-react";
import TableRowAssignedWork from "./TableRowAssignedWork";
import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import { useStateShareContext } from "../../../Context/StateContext";

const TableAssignedWork = () => {
  const { darkMode } = useStateShareContext();
  return (
    <>
      <Table showCheckbox={false} hoverable="true" className="">
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600 dark:text-white">
                Uptaken work
              </p>
              <Badge size="sm" color="secondary" className="dark:text-black">
                1 assignment
              </Badge>
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableHead className="min-w-[100px]">
            <p className="text-body-5 font-medium text-metal-400 dark:text-sidebartext-hover">
              #
            </p>
          </TableHead>
          <TableHead className="min-w-[122px]">Type</TableHead>
          <TableHead className="min-w-[82px]">Words</TableHead>
          <TableHead className="min-w-[200px]">Deadline</TableHead>
          <TableHead className="min-w-[140px]">Timer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="min-w-[100px]" />
        </TableHeader>
        <TableBody className="divide-gray-25 divide-y">
          {/* <TableRowAssignedWork isRead={false} />
        <TableRowAssignedWork isRead={true} /> */}
        </TableBody>
      </Table>
      <div className="pb-[8rem]">
        <img
          className="mx-auto w-[16rem]"
          src={darkMode ? UnavailableDark : UnavailableLight}
          alt=""
        />
        <p className="font-bold text-2xl text-center">No assigned work yet!</p>
        <p className="font-medium text-sm text-center mt-2">
          Any assigned work will appear here.
        </p>
      </div>
    </>
  );
};

export default TableAssignedWork;
