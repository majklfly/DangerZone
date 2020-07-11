import React, { useEffect, useRef } from "react";
import "./HomepageScreen.scss";
import lottie from "lottie-web";

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
        <div className="homeScreenText" data-test="homeScreenText">
          <p>
            This site has been designed to improve general knowledge of HACCP
            Level 2 in UK/EU standards.
          </p>
          <div className="containerWelcomeAnimation" ref={container}></div>
        </div>
      </div>
    </>
  );
};

export default HomepageScreen;
