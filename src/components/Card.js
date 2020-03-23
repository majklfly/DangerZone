import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ChaptersContext } from "../context/ChaptersContext";

import { Card } from "antd";

const CustomCard = props => {
  const history = useHistory();
  const { setCurrentChapter } = useContext(ChaptersContext);

  const handleClick = () => {
    setCurrentChapter(props.index)
    history.push("/chapter/")
  }
  return (
    <Card
      style={{ width: 400 }}
      title={props.title}
      bordered={true}
      hoverable
      onClick={handleClick}
    >
      {props.description}
    </Card>
  );
};

export default CustomCard;

//
