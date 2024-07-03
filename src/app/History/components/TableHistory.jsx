import React from "react";
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import {
  ArrowDown,
  Cube,
  DotsThreeOutline,
  Pencil,
  Trash,
} from "phosphor-react";
import TableRowHistory from "./TableRowHistory";

const TableHistory = () => {
  return (
    <Table showCheckbox={false} hoverable={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">History</p>
            <Badge size="sm" color="secondary">
              1 assignment
            </Badge>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[100px]">
          <p className="text-body-5 font-medium text-metal-400">#</p>
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[122px]">Type</Table.HeadCell>
        <Table.HeadCell className="min-w-[82px]">Words</Table.HeadCell>
        <Table.HeadCell className="min-w-[200px]">Deadline</Table.HeadCell>
        <Table.HeadCell className="min-w-[140px]">Section</Table.HeadCell>
        <Table.HeadCell>Submitted</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        <TableRowHistory />
      </Table.Body>
    </Table>
  );
};

export default TableHistory;
