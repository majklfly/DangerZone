import React, { useContext, useEffect } from "react";

import "./HomepageScreen.scss";

import UserDataContext from "../context/UserDataContext";
import { AnimBackground } from "../components/background";

const HomepageScreen = () => {
  const { getUserData } = useContext(UserDataContext);

  useEffect(getUserData, []);

  return (
    <>
      <AnimBackground />
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
