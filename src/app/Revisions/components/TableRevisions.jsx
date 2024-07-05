import React from "react";
import {
  Badge,
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableBody,
} from "keep-react";

import TableRowRevisions from "./TableRowRevisions";
import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import { useStateShareContext } from "../../../Context/StateContext";

const TableRevisions = () => {
  const { darkMode } = useStateShareContext();
  return (
    <>
      <Table showCheckbox={false} hoverable={true}>
        <TableCaption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600 dark:text-white">
                Revisions
              </p>
              <Badge size="sm" color="secondary" className="dark:text-black">
                1 revisions
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
          <TableHead className="min-w-[122px]">Reviewer</TableHead>
          <TableHead className="min-w-[82px]">Time reviewed</TableHead>
          <TableHead className="min-w-[200px]">Submit before</TableHead>
          <TableHead className="min-w-[200px]">Status</TableHead>
        </TableHeader>
        <TableBody className="divide-gray-25 divide-y">
          <TableRowRevisions />
          <TableRowRevisions isOpen={true} />
        </TableBody>
      </Table>
      <div className="pb-[8rem] hidden">
        <img
          className="mx-auto w-[16rem]"
          src={darkMode ? UnavailableDark : UnavailableLight}
          alt=""
        />
        <p className="font-bold text-2xl text-center">No revisions yet!</p>
        <p className="font-medium text-sm text-center mt-2">
          Any revisions will appear here.
        </p>
      </div>
    </>
  );
};

export default TableRevisions;
