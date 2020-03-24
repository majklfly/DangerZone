import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import Article from "../components/Article";
import "./ArticlesScreen.scss";
import { ChaptersContext } from "../context/ChaptersContext";

import server from "../api/server";

const ArticlesScreen = () => {
  const [articles, setArticles] = useState({});
  const history = useHistory();
  const { currentChapter } = useContext(ChaptersContext);

  const getArticles = () => {
    server.get("/articles/").then(res => {
      var articles = [];
      res.data.map(item => {
        return item.chapter === currentChapter ? articles.push(item) : null;
      });
      setArticles(articles);
    });
  };

  const handleClick = () => {
    history.push("quiz/");
  };

  console.log("Articles Current chapter is: " + currentChapter);

  useEffect(getArticles, []);

  return (
    <>
      <img alt="background" className="background" />
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
