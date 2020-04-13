import React, { useEffect } from "react";
import { Row } from "antd";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { connect } from "react-redux";

import { getChapters, getChapter } from "../../store/actions/chapter";
import { getUserData } from "../../store/actions/userData";
import CustomCard from "../Card/Card";

import "./Cards.css";

const Cards = props => {
  const history = useHistory();

  const chapters = [];
  const completedChapters = [];

  const sortChapters = () => {
    if (props.chapters !== undefined) {
      props.chapters.map(item => {
        return chapters.push([item.id, item.title]);
      });
      props.completedChapters[0].map(item => {
        return completedChapters.push(item.chapterTitle);
      });
    }
  };
  sortChapters();

  const handleClick = (e, chapterId) => {
    props.getChapter(chapterId);
    history.push("/chapter/");
  };

  useEffect(() => {
    props.getChapters();
    props.getUserData();
  }, []); // eslint-disable-line

  return (
    <>
      {props.chapters === undefined ? (
        <Spin size="large" className="spinnerCards" />
      ) : (
        <div className="container">
          <Row gutter={16} className="cards">
            {chapters.map((chapter, index) => {
              if (completedChapters.includes(chapter[1])) {
                return (
                  <div className="active-container" key={index}>
                    <CustomCard
                      className="inactive"
                      bordered={true}
                      key={index}
                      index={index + 1}
                      title={chapter[1]}
                      id={chapter.id}
                      hoverable={false}
                    ></CustomCard>
                  </div>
                );
              } else {
                return (
                  <div
                    className="active-container"
                    onClick={e => handleClick(e, chapter[0])}
                    key={index}
                  >
                    <CustomCard
                      className="active"
                      bordered={true}
                      index={index + 1}
                      title={chapter[1]}
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
      dispatch(getChapters());
    },
    getUserData: () => {
      dispatch(getUserData());
    },
    getChapter: chapterId => {
      dispatch(getChapter(chapterId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
