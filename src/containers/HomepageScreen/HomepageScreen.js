import React, { useEffect, useRef } from "react";
import "./HomepageScreen.css";
import lottie from "lottie-web";
import "../../components/SmallScreenWarning/SmallScreenWarning";
import { connect } from "react-redux";
import { VocabularyOfDay } from "../../components/VocabularyOfDay/VocabularyOfDay";

const HomepageScreen = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/questions.json"),
    });
    lottie.setSpeed(0.5);
  }, []);

  return (
    <>
      <div
        className="welcomeScreenContainer"
        data-test="welcomeScreenContainer"
      >
        <div className="VocabularyOfDay">
          <VocabularyOfDay />
        </div>
        <div className="DatesInfoContainer">
          <h3>You joined us: 28/06/2016</h3>
          <h3>Last login: 14/07/2020</h3>
        </div>
        <div className="DashboardChaptersInfo1">
          <h3>Chapter 1</h3>
          <h3>Chapter 2</h3>
          <h3>Chapter 3</h3>
          <h3>Chapter 4</h3>
          <h3>Chapter 5</h3>
        </div>
        <div className="DashboardChaptersInfo2">
          <h3>Chapter 1</h3>
          <h3>Chapter 2</h3>
          <h3>Chapter 3</h3>
          <h3>Chapter 4</h3>
          <h3>Chapter 5</h3>
        </div>
        <div className="containerWelcomeAnimation" ref={container} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.userDataReducer);
  return {
    userData: state.userDataReducer,
  };
};

export default connect(mapStateToProps)(HomepageScreen);
