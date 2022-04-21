import React from "react";
import {
  BarChart as Chart,
  CartesianGrid,
  XAxis,
  Bar,
  Legend,
  Tooltip,
  YAxis,
  Label,
} from "recharts";

const BarChart = ({
  showGrid,
  showTwoRawData,
  data,
  fill,
  secondFill,
  xAxisDataKey,
  secondXBarDataKey,
  barDataKey,
  graphName,
}) => {
  return (
    <div>
      <Chart width={300} height={250} data={data}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey={xAxisDataKey}>
          {" "}
          <Label value={graphName} offset={0} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={barDataKey} fill={fill} />
        {showTwoRawData && (
          <Bar dataKey={secondXBarDataKey} fill={secondFill} />
        )}
      </Chart>
    </div>
  );
};

export default BarChart;
