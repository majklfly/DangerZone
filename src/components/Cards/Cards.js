import React, { useEffect, useState, useCallback } from "react";
import { Row } from "antd";
import { useHistory } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

import { getChapters } from "../../store/actions/chapter";
import CustomCard from "../Card/Card";

import "./Cards.css";

const Cards = props => {
  const history = useHistory();
  const [chapterIds, setChapterIds] = useState({});
  const [chapters, setChapters] = useState([]);
  const [completedChapters, setCompletedChapters] = useState([]);

  const sortChapters = () => {
    console.log("runned2");
    const tempData = {};
    const chaptersLocal = [];
    console.log("props.chapters", props.chapters);
    props.chapters.map(item => {
      console.log("item", item);
      tempData[item.title] = item.id;
      return chaptersLocal.push(item.title);
    });
    setChapters(chaptersLocal);
  };

  const handleClick = (e, chapter) => {
    console.log("clicked", chapter);
    let currentChapterId = chapterIds[chapter];
    localStorage.setItem("currentChapterId", currentChapterId);
    localStorage.setItem("currentChapter", chapter);
    history.push("/chapter/");
  };

  useEffect(getChapters, []); //eslint-disable-line
  console.log(props);

  return (
    <>
      {props.loading ? (
        <LoadingOutlined />
      ) : (
        <div className="container">
          <Row gutter={16} className="cards">
            {props.chapters.map((chapter, index) => {
              if (props.completedChapters.includes(chapter)) {
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

const mapStateToProps = state => {
  return {
    chapters: state.chapterReducer.chapters,
    userData: state.userDataReducer,
    completedChapters: [state.userDataReducer.chapterdata]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChapters: () => {
      dispatch(getChapters);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
