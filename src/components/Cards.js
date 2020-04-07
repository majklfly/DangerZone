import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { useHistory } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import server from "../api/server";
import CustomCard from "./Card";

import "./Cards.css";

const token = localStorage.getItem("token");

const Cards = props => {
  const history = useHistory();
  const userData = useSelector(state => state.userDataReducer);
  const [chapters, setChapters] = useState([]);
  const [completedChapters, setCompletedChapters] = useState([]);

  const getChapters = () => {
    server
      .get("/chapters/", {
        headers: { authorization: `Token ${token}` }
      })
      .then(res => {
        const chaptersLocal = [];
        res.data.map(item => {
          return chaptersLocal.push(item.title);
        });
        setChapters(chaptersLocal);
      });
  };

  const getCompletedChapters = () => {
    const completedChapters = [];
    userData.chapterdata.map(item => {
      return completedChapters.push(item.chapterTitle);
    });
    setCompletedChapters(completedChapters);
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
            {chapters.map((chapter, index) => {
              if (completedChapters.includes(chapter)) {
                return (
                  <div className="active-container" key={index}>
                    <CustomCard
                      className="inactive"
                      bordered={true}
                      key={index}
                      index={index + 1}
                      title={chapter}
                      id={chapter.id}
                      hoverable={false}
                    ></CustomCard>
                  </div>
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
