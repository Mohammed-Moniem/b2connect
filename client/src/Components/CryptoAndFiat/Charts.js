import React from "react";
import { Row, Col } from "antd";
import BarChart from "./../../Components/Charts/BarChart";
import AreaChart from "../../Components/Charts/AreaChart";
const Charts = ({ fiat, crypto }) => {
  return (
    <>
      <Row style={{ paddingTop: "30px" }} justify="space-between">
        <Col>
          <AreaChart
            data={fiat}
            fill="#764394"
            graphName="Fiat Value Area Graph"
            xAxisDataKey="name"
            lineType="monotone"
            areaDataKey="value"
            fillOpacity={0.7}
          />
        </Col>
        <Col>
          <AreaChart
            data={crypto}
            fill="#cfcb0e"
            graphName="Crypto Value Area Graph"
            xAxisDataKey="name"
            lineType="monotone"
            areaDataKey="value"
            fillOpacity={0.7}
          />
        </Col>
      </Row>

      <Row style={{ paddingTop: "30px" }} justify="space-between">
        <Col>
          <BarChart
            data={fiat}
            fill="#c781bf"
            showGrid={true}
            graphName="Fiat Value Bar Chart"
            xAxisDataKey="name"
            barDataKey="value"
          />
        </Col>
        <Col>
          <BarChart
            data={crypto}
            fill="#6aa2de"
            graphName="Crypto Value Bar Chart"
            xAxisDataKey="name"
            barDataKey="value"
          />
        </Col>
      </Row>
    </>
  );
};

export default Charts;
