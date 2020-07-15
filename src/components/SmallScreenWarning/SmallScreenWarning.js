import React from "react";
import "./SmallScreenWarning.css";
import { LoginBackgroundSVG } from "../LoginBackgroundSVG/LoginBackgroundSVG";

export const SmallScreenWarning = () => {
  return (
    <div className="SmallScreenWarning">
      <div className="SmallScreenWarningText">
        The screen of your device is too small to fully enjoy the application.
        Please use our <a href="http://www.google.com">app</a> or a device with
        bigger screen
      </div>
      <LoginBackgroundSVG />
    </div>
  );
};
