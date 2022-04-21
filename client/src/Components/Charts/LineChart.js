import React from "react";
import {
  LineChart as Chart,
  CartesianGrid,
  XAxis,
  Line,
  Legend,
  Tooltip,
  YAxis,
} from "recharts";

const LineChart = ({
  data,
  firstDataKey,
  secondDataKey,
  xAxisDataKey,
  firstLineType,
  secondLineType,
  firstStrokeColor,
  secondStrokeColor,
}) => {
  return (
    <Chart width={300} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisDataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type={firstLineType}
        dataKey={firstDataKey}
        stroke={firstStrokeColor}
      />
      <Line
        type={secondLineType}
        dataKey={secondDataKey}
        stroke={secondStrokeColor}
      />
    </Chart>
  );
};

export default LineChart;
