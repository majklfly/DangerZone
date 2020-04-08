import React, { useState, useEffect } from "react";
import { Button } from "antd";

import Article from "../components/Article";
import "./ArticlesScreen.scss";

import server from "../api/server";
import { set_chapter } from "../store/actions/chapter";
import { useDispatch } from "react-redux";

const token = localStorage.getItem("token");
const currentChapterId = localStorage.getItem("currentChapterId");

console.log("currentChapter", currentChapterId);

const ArticlesScreen = props => {
  const [articles, setArticles] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await server.get(`/chapters/${currentChapterId}/`, {
        headers: { authorization: `Token ${token}` }
      });
      console.log("resultdata", result.data);
      dispatch(set_chapter(result.data));
    }
    fetchData();
  });

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
