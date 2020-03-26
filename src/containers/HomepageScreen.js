import React from "react";

import "./HomepageScreen.scss";

const HomepageScreen = () => {
  return (
    <>
      <div className="background"></div>
      <div className="welcome-speech">
        <h1 className="welcome-title">Welcome to DangerZone!</h1>
        <h3 className="welcome-content">
          This page is designed to help you immprove your knowledge and practice
          in hygiene. Please visit MammaMia to continue on your path and most
          importantly Have fun!
        </h3>
      </div>
    </>
  );
};

export default HomepageScreen;
