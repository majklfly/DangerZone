import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

import car from "../assets/car_animation/car2.png";
import wheel from "../assets/car_animation/wheel.png";

export const FinalQuizAnimation = props => {
  const history = useHistory();

  const handleClickPositive = () => {
    history.push("/chapters/");
  };

  const handleClickNegative = () => {
    history.push("/chapter/");
  };

  return (
    <div className="hero">
      <h2 className="results">
        You answered correctly {props.validatedCount} out of{" "}
        {props.questionCount} questions
      </h2>
      <div className="highway"></div>
      <div className="city"></div>
      <div className="car">
        <img alt="car" src={car} />
      </div>
      <div className="wheel">
        <img alt="rightwheel" src={wheel} className="back-wheel" />
        <img alt="leftwheel" src={wheel} className="front-wheel" />
      </div>
      {props.validatedCount >= 4 ? (
        <Button
          type="primary"
          size="large"
          className="result-button-positive"
          onClick={handleClickPositive}
        >
          You passed, please continue to next lesson
        </Button>
      ) : (
        <Button
          type="primary"
          size="large"
          className="result-button-negative"
          onClick={handleClickNegative}
        >
          You failed, please repeate the lesson
        </Button>
      )}
    </div>
  );
};
