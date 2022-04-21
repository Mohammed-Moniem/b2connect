import React from "react";
import { Row, Col } from "antd";
import CountCards from "./../Common/Counts";
import {
  MoneyCollectOutlined,
  MonitorOutlined,
  WalletOutlined,
} from "@ant-design/icons";

function Statistics({ totalCount, fiatCount, cryptoCount }) {
  return (
    <Row justify="space-between">
      <Col>
        <CountCards
          value={totalCount}
          title="Total Results"
          icon={<WalletOutlined />}
        />
      </Col>
      <Col>
        <CountCards
          value={fiatCount}
          title="Fiat Results"
          icon={<MoneyCollectOutlined />}
        />
      </Col>
      <Col>
        <CountCards
          value={cryptoCount}
          title="Crypto Results"
          icon={<MonitorOutlined />}
        />
      </Col>
    </Row>
  );
}

export default Statistics;
