import React from "react";
import { Statistic, Card } from "antd";

const CountCards = ({ title, value, color, icon }) => (
  <div>
    <Card>
      <Statistic
        title={title}
        value={value}
        valueStyle={{ color: `${color}` }}
        prefix={icon}
      />
    </Card>
  </div>
);

export default CountCards;
