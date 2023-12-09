import React from "react";
import { Spin } from "antd";
const loading = () => {
  return (
    <div>
      <Spin spinning={true} size="large" fullscreen />
    </div>
  );
};

export default loading;
