import React from "react";
import {
  ComposedChart as Chart,
  CartesianGrid,
  XAxis,
  Line,
  Legend,
  Tooltip,
  YAxis,
  Area,
  Bar,
  Label,
} from "recharts";

function ComposedChart({
  data,
  xAxisDataKey,
  gridStrokeColor,
  lineType,
  areaFill,
  areaDataKey,
  areaStrokeColor,
  lineDataKey,
  lineStrokeColor,
  barDataKey,
  barFillColor,
  barSize,
  graphName,
}) {
  return (
    <Chart width={300} height={250} data={data}>
      <XAxis dataKey={xAxisDataKey}>
        {" "}
        <Label value={graphName} offset={0} position="insideBottom" />
      </XAxis>
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke={gridStrokeColor} />
      <Area
        type={lineType}
        dataKey={areaDataKey}
        fill={areaFill}
        stroke={areaStrokeColor}
      />
      <Bar dataKey={barDataKey} barSize={barSize} fill={barFillColor} />
      <Line type={lineType} dataKey={lineDataKey} stroke={lineStrokeColor} />
    </Chart>
  );
}

export default ComposedChart;
