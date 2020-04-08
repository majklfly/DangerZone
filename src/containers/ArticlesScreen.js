import React, { useState, useEffect } from "react";
import { Button } from "antd";

import Article from "../components/Article";
import "./ArticlesScreen.scss";

import server from "../api/server";

const token = localStorage.getItem("token");
const currentChapterId = localStorage.getItem("currentChapterId");

console.log("currentChapter", currentChapterId);

const ArticlesScreen = props => {
  const [articles, setArticles] = useState({});

  const currentChapter = localStorage.getItem("currentChapter");

  const getArticles = () => {
    server
      .get(`/chapters/${currentChapterId}`, {
        headers: { authorization: `Token ${token}` }
      })
      .then(res => {
        console.log(res);
      });
  };

  useEffect(getArticles, [props]);

  return (
    <>
      <div className="carousel">
        <Article articles={articles} data-testid="fetch-articles" />
        <Button
          type="primary"
          size="large"
          style={buttonStyle}
          onClick={() => props.history.push("/chapters/quiz/")}
        >
          Test me!
        </Button>
      </div>
    </>
  );
};

const buttonStyle = {
  width: "100%",
  background: "#FF7110",
  border: "#FF7110",
  marginTop: "10px"
};

export default ArticlesScreen;
