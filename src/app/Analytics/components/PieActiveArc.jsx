import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const PieActiveArc = () => {
  const data = [
    { id: 0, value: 10, label: "Successful Work", color: "#4caf50" },
    { id: 1, value: 20, label: "Quality Issues", color: "#ff9800" },
  ];
  return (
    <PieChart
      colors={["#ff9800", "#4caf50"]}
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={200}
    />
  );
};

export default PieActiveArc;
