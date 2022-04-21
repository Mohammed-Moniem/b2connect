import React from "react";
import {
  AreaChart as Chart,
  CartesianGrid,
  XAxis,
  Area,
  Tooltip,
  YAxis,
  Label,
} from "recharts";

const AreaChart = ({
  data,
  fill,
  xAxisDataKey,
  lineType,
  areaDataKey,
  fillOpacity,
  graphName,
}) => {
  return (
    <div>
      <Chart width={300} height={250} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={fill} stopOpacity={0.8} />
            <stop offset="100%" stopColor={fill} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={xAxisDataKey}>
          {" "}
          <Label value={graphName} offset={0} position="insideBottom" />
        </XAxis>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type={lineType}
          dataKey={areaDataKey}
          stroke={fill}
          fillOpacity={fillOpacity}
          fill={fill}
        />
      </Chart>
    </div>
  );
};

export default AreaChart;
