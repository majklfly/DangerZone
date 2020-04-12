import React from "react";

import { Card } from "antd";

import "../Cards/Cards.css";

const CustomCard = props => {
  return (
    <>
      <Card className={props.className} data-test="customCard">
        {props.title}
      </Card>
    </>
  );
};

export default CustomCard;

//
