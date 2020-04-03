import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import Article from "../components/Article";
import "./ArticlesScreen.scss";

import server from "../api/server";

const ArticlesScreen = props => {
  const [articles, setArticles] = useState({});
  const history = useHistory();

  const currentChapter = localStorage.getItem("currentChapter");

  const getArticles = () => {
    server.get("/articles/").then(res => {
      var articles = [];
      res.data.map(item => {
        return item.chapterTitle === currentChapter
          ? articles.push(item)
          : null;
      });
      setArticles(articles);
    });
  };

  const handleClick = () => {
    history.push("quiz/");
  };

  useEffect(getArticles, [props]);

  return (
    <>
      <div className="carousel">
        <Article articles={articles} />
        <Button
          type="primary"
          size="large"
          style={buttonStyle}
          onClick={handleClick}
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
