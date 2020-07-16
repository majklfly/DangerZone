import React, { useEffect, useRef } from "react";
import "./HomepageScreen.css";
import lottie from "lottie-web";
import "../../components/SmallScreenWarning/SmallScreenWarning";
import { connect } from "react-redux";
import { VocabularyOfDay } from "../../components/VocabularyOfDay/VocabularyOfDay";
import { getChapters } from "../../store/actions/chapter";

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

  console.log(props.userData);

  const formatDate = () => {
    const year =
      props.userData.joined[0] +
      props.userData.joined[1] +
      props.userData.joined[2] +
      props.userData.joined[3];

    const month = props.userData.joined[5] + props.userData.joined[6];
    const day = props.userData.joined[8] + props.userData.joined[9];
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <div
        className="welcomeScreenContainer"
        data-test="welcomeScreenContainer"
      >
        <div className="VocabularyOfDay">
          <VocabularyOfDay />
        </div>
        <div className="DatesInfoContainer1">
          <h3>You joined us: {formatDate()}</h3>
          <h3>Last login: 14/07/2020</h3>
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
