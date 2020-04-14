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
    console.log("clicked", chapterId);
    props.getChapter(chapterId);
    history.push("/chapter/");
  };

  useEffect(() => {
    props.getChapters();
    props.getUserData();
  }, []); // eslint-disable-line

  console.log(props.completedChapters.chapter);

  return (
    <>
      {props.chapters === undefined ? (
        <Spin size="large" className="spinnerCards" />
      ) : (
        <div className="container">
          <Row gutter={16} className="cards">
            {props.chapters.map((chapter, index) => {
              return (
                <>
                  {props.completedChapters[0].map((item, index) => {
                    console.log(chapter.title);
                    if (item.chapterTitle === chapter.title) {
                      console.log("hurray");
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
                          >
                            Active Text
                          </CustomCard>
                        </div>
                      );
                    }
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
                        >
                          Inactive text
                        </CustomCard>
                      </div>
                    );
                  })}
                </>
              );
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
