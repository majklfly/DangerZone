import React, { useEffect, useState, useContext, useRef } from "react";
import { Row } from "antd";
import { useHistory } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";

import server from "../api/server";
import CustomCard from "./Card";
import { UserDataContext } from "../context/UserDataContext";

import "./Cards.scss";

const Cards = props => {
  const history = useHistory();
  const { userData } = useContext(UserDataContext);
  const [chapterTitles, setChapterTitles] = useState([]);
  const [completedChapters, setCompletedChapters] = useState([]);

  const activeTitles = [];

  const getCompletedChapters = () => {
    server.get("/chapterdata/").then(res => {
      const completedChapters = [];
      const username = localStorage.getItem("username");
      res.data.map(item => {
        if (item.username === username && item.completed === true) {
          completedChapters.push(item.chapterTitle);
        }
      });
      setCompletedChapters(completedChapters);
    });
  };

  const getChapters = () => {
    server.get("/chapters/").then(res => {
      const chapterTitles = [];
      res.data.map(item => {
        return chapterTitles.push(item.title);
      });
      setChapterTitles(chapterTitles);
    });
  };

  const handleClick = (e, chapter) => {
    console.log("clicked", chapter);
    localStorage.setItem("currentChapter", chapter);
    history.push("/chapter/");
  };

  useEffect(() => {
    getChapters();
    getCompletedChapters();
  }, []); //eslint-disable-line

  return (
    <>
      {props.loading ? (
        <LoadingOutlined />
      ) : (
        <div className="container">
          <Row gutter={16} className="cards">
            {chapterTitles.map((chapter, index) => {
              if (completedChapters.includes(chapter)) {
                return (
                  <CustomCard
                    className="inactive"
                    bordered={true}
                    key={index}
                    index={index + 1}
                    title={chapter}
                    id={chapter.id}
                    hoverable={false}
                  ></CustomCard>
                );
              } else {
                return (
                  <div
                    className="active-container"
                    onClick={e => handleClick(e, chapter)}
                    key={index}
                  >
                    <CustomCard
                      className="active"
                      bordered={true}
                      index={index + 1}
                      title={chapter}
                      id={chapter.id}
                      hoverable={true}
                    ></CustomCard>
                  </div>
                );
              }
            })}
          </Row>
        </div>
      )}
    </>
  );
};

export default Cards;
