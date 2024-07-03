import { Table, Badge, TableRow, TableCell } from "keep-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TableRowRevisions = () => {
  const navigate = useNavigate();

  return (
    <TableRow
      onClick={() => navigate("/revisions/1")}
      className="bg-white dark:bg-darkMode-cardBg dark:text-white cursor-pointer"
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600 dark:text-sidebartext-hover">
                  MK345
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>

      <TableCell>
        <p>Essay</p>
      </TableCell>
      <TableCell>
        <p>1500</p>
      </TableCell>
      <TableCell>21st June 2024</TableCell>
      <TableCell>
        <Badge color="warning" showIcon={true} className="dark:text-orange-500">
          In progress
        </Badge>
      </TableCell>
    </TableRow>
  );
};

export default TableRowRevisions;
