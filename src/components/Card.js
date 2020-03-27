import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ChaptersContext } from "../context/ChaptersContext";

import { Card } from "antd";

import "./Cards.scss";

const CustomCard = props => {
  const history = useHistory();
  const { setCurrentChapter } = useContext(ChaptersContext);

  const handleClick = () => {
    setCurrentChapter(props.id);
    history.push("/chapter/");
  };
  return (
    <>
      <Card
        headStyle={{ color: "white" }}
        title={props.title}
        bordered={props.bordered}
        hoverable
        onClick={handleClick}
        className="card"
      >
        {props.description}
      </Card>
    </>
  );
};

export default CustomCard;

//
