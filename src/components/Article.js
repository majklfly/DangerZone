// TODO: """finish render articles"""

import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import server from "../api/server";
import "./Quiz.scss";

function Article(props) {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    server.get("/articles/").then(res => {
      setArticles(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Carousel className="container-carousel">
        {articles.map((article, index) => {
          return (
            <div className="article" key={index}>
              <h1 style={articleName}>{article.name}</h1>
              <h5 style={articleContent}>{article.content}</h5>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

const articleName = {
  color: "white",
  paddingTop: "10px"
};

const articleContent = {
  color: "white",
  padding: "10px"
};

export default Article;
