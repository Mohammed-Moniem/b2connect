import React from "react";
import { PieChart as Chart, Pie } from "recharts";

function PieChart({ data, dataKey, nameKey, outerRadius, fill, innerRadius }) {
  return (
    <Chart width={300} height={250}>
      <Pie
        data={data}
        dataKey={dataKey}
        nameKey={nameKey}
        outerRadius={outerRadius}
        innerRadius={innerRadius}
        fill={fill}
        label
      />
    </Chart>
  );
}

export default PieChart;
