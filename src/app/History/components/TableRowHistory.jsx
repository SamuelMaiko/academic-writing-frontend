import { Table, Badge, Button } from "keep-react";
import React from "react";

const TableRowHistory = () => {
  return (
    <Table.Row className="bg-white">
      <Table.Cell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                  MK345
                </p>
              </div>
            </div>
          </div>
        </div>
      </Table.Cell>

      <Table.Cell>
        <p>Essay</p>
      </Table.Cell>
      <Table.Cell>
        <p>1500</p>
      </Table.Cell>
      <Table.Cell>21st June 2024</Table.Cell>
      <Table.Cell>UptakenWork</Table.Cell>
      <Table.Cell>
        <Badge color="success" showIcon={true}>
          True
        </Badge>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRowHistory;
