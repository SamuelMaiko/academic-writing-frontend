import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import TableHistory from "./components/TableHistory";

const History = () => {
  return (
    <div className="w-full px-[2rem]">
      <PageHeader
        title={"See your history"}
        subTitle={
          "See all the history of the work done on the app. Ordered by oldest."
        }
      />
      <div>
        <TableHistory />
      </div>
    </div>
  );
};

export default History;
