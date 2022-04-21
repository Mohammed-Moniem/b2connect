import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Result
      status="500"
      title="404"
      subTitle="Sorry >_< did not find what you're looking for. Try again please"
      extra={<Link to="/">Back</Link>}
    />
  );
};

export default Error;
