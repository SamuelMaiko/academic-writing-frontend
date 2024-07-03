import React from "react";
import {
  Table,
  Badge,
  TableBody,
  TableHead,
  TableHeader,
  TableCaption,
} from "keep-react";
import TableRowUptakenWork from "./TableRowUptakenWork";

const TableUptakenWork = () => {
  return (
    <Table showCheckbox={false} hoverable={true}>
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
        <TableRowUptakenWork />
      </TableBody>
    </Table>
  );
};

export default TableUptakenWork;
