import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography } from "antd";
import axios from "axios";
const { Title } = Typography;

function IPDetails() {
  const [IPv4Data, setIPv4Data] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("https://geolocation-db.com/json/");
      setIPv4Data(data);
    };
    fetch();
  }, []);

  return (
    <Row justify="center">
      <Col>
        <div className="site-card-border-less-wrapper">
          <Card
            title={<Title>IPv4 Details</Title>}
            bordered={true}
            style={{ width: 400 }}
          >
            <Title level={3}>Country: {IPv4Data.country_name}</Title>
            <Title level={3}>City: {IPv4Data.city}</Title>
            <Title level={3}>Longitude: {IPv4Data.longitude}</Title>
            <Title level={3}>Latitude: {IPv4Data.latitude}</Title>
            <Title level={3}>IPv4: {IPv4Data.IPv4}</Title>
            <Title level={3}>Country Code: {IPv4Data.country_code}</Title>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default IPDetails;
