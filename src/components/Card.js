import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

import { Card } from "antd";

import "./Cards.css";

const CustomCard = props => {
  return (
    <>
      <Card className={props.className} hoverable={props.hoverable}>
        <CheckCircleOutlined className={props.className} id="checkedIcon" />
        {props.title}
      </Card>
    </>
  );
};

export default CustomCard;

//
