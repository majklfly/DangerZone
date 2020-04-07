import React from "react";

import { Card } from "antd";

import "./Cards.css";

const CustomCard = props => {
  return (
    <>
      <Card className={props.className}>{props.title}</Card>
    </>
  );
};

export default CustomCard;

//
