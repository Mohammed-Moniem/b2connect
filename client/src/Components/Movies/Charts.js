import React from "react";
import { Row, Col } from "antd";
import BarChart from "../Charts/BarChart";
import LineChart from "./../Charts/LineChart";
import ComposedChart from "./../Charts/ComposedChart";
import PieChart from "../Charts/PieChart";

const Charts = ({ movies }) => {
  return (
    <>
      <Row style={{ paddingTop: "30px" }} justify="center">
        <Col>
          <BarChart
            showGrid={true}
            data={movies}
            fill="#f78bb8"
            secondFill="#66042d"
            xAxisDataKey="title"
            barDataKey="popularity"
            secondXBarDataKey="vote_count"
            showTwoRawData={true}
          />
        </Col>
        <Col>
          <LineChart
            data={movies}
            firstDataKey="popularity"
            secondDataKey="vote_count"
            xAxisDataKey="title"
            secondLineType="monotone"
            firstLineType="monotone"
            firstStrokeColor="#bf5517"
            secondStrokeColor="#bd0909"
          />
        </Col>
      </Row>
      <Row style={{ paddingTop: "30px" }} justify="center">
        <Col>
          <ComposedChart
            data={movies}
            xAxisDataKey="title"
            gridStrokeColor="#f5f5f5"
            lineType="monotone"
            areaFill="#99c449"
            areaDataKey="vote_count"
            barDataKey="popularity"
            barSize={20}
            barFillColor="#b5ed1a"
            areaStrokeColor="#1d2b02"
            lineDataKey="vote_average"
            lineStrokeColor="#32e373"
            graphName="Composed Chart"
          />
        </Col>
        <Col>
          <PieChart
            data={movies}
            dataKey="popularity"
            nameKey="title"
            outerRadius={80}
            innerRadius={50}
            fill="#eb3461"
          />
        </Col>
      </Row>
    </>
  );
};

export default Charts;
