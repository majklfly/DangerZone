import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import Article from "../../components/Article";
import "./ChapterOneScreen.scss";

const ChapterOneScreen = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("quiz/");
  };

  return (
    <div className="carousel">
      <Article />
      <Button
        type="primary"
        size="large"
        style={buttonStyle}
        onClick={handleClick}
      >
        Test me!
      </Button>
    </div>
  );
};

const buttonStyle = {
  width: "100%",
  background: "#FF7110",
  border: "#FF7110",
  marginTop: "10px"
};

export default ChapterOneScreen;
