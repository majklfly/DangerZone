import React, { useEffect, useRef } from "react";
import "./HomepageScreen.css";
import lottie from "lottie-web";
import "../../components/SmallScreenWarning/SmallScreenWarning";
import { connect } from "react-redux";
import { VocabularyOfDay } from "../../components/VocabularyOfDay/VocabularyOfDay";
import { getChapters } from "../../store/actions/chapter";
import { Progress } from "antd";

const HomepageScreen = (props) => {
  const container = useRef(null);

  useEffect(() => {
    props.getChapters();
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/questions.json"),
    });
    lottie.setSpeed(0.5);
  }, []); //eslint-disable-line

  const chapters = [];
  const completedChapters = [];

  const sortChapters = () => {
    if (props.chapters.chapters) {
      props.chapters.chapters.map((item) => {
        return chapters.push([item.id, item.title]);
      });
      props.completedChapters[0].map((item) => {
        return item.completed === true
          ? completedChapters.push(item.chapterTitle)
          : null;
      });
    }
  };
  sortChapters();

  const updatedChapters = chapters.filter((chapter) => {
    return !completedChapters.includes(chapter[1]);
  });

  const formatDate = (date) => {
    if (date) {
      const year = date[0] + date[1] + date[2] + date[3];
      const month = date[5] + date[6];
      const day = date[8] + date[9];
      return `${day}/${month}/${year}`;
    }
  };

  const calculatePercentage = () => {
    const percent = chapters.length / 100;
    const value = completedChapters.length / percent;
    return value;
  };

  return (
    <>
      <div
        className="welcomeScreenContainer"
        data-test="welcomeScreenContainer"
      >
        <h2 className="VocabularyofDayTitle">Word of the day:</h2>
        <div className="VocabularyOfDay">
          <VocabularyOfDay />
        </div>
        <div className="DashboardProgressBar">
          <Progress
            strokeColor={{
              "0%": "#ff7110",
              "100%": "#364d79",
            }}
            percent={calculatePercentage()}
            status="active"
            trailColor="transparent"
            showInfo={true}
          />
        </div>
        <div className="DatesInfoContainer1">
          <h3>You joined us: {formatDate(props.userData.joined)}</h3>
          <h3>Last login: {formatDate(props.userData.lastLogin)}</h3>
        </div>
        <div className="DatesInfoContainer2">
          <h3>Authorization: Student</h3>
          <h3>Permissions: None</h3>
        </div>
        <h2 className="DashboardTitle1">Courses to explore:</h2>
        <div className="DashboardChaptersInfo1">
          {updatedChapters.map((chapter, index) => {
            return (
              <div className="DashboardListItem" key={index}>
                <h3 key={index}>{chapter[1]}</h3>
              </div>
            );
          })}
        </div>
        <h2 className="DashboardTitle2">Finished courses:</h2>
        <div className="DashboardChaptersInfo2">
          {completedChapters.map((chapter, index) => {
            return (
              <div className="DashboardListItem" key={index}>
                <h3 key={index}>{chapter}</h3>
              </div>
            );
          })}
        </div>
        <div className="containerWelcomeAnimation" ref={container} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer,
    userData: state.userDataReducer,
    completedChapters: [state.userDataReducer.chapterdata],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChapters: () => {
      dispatch(getChapters());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepageScreen);
