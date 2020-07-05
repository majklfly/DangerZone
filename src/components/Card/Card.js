import React, { useState } from "react";

import { Card } from "antd";
import {
  HandWashingAnimation,
  SeparateAnimation,
  FoodSafetyAnimation,
  FoodAlergyAnimation,
  PestControlAnimation,
  CleaningAnimation,
  ContaminationAnimation,
  VirusAnimation,
} from "../LottieAnimations/LottieAnimations";

import "./Card.css";

const CustomCard = (props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Card className={props.className} data-test="customCard">
        {props.index === 1 && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainerExtra"
          >
            <HandWashingAnimation active={active} />
          </div>
        )}
        {props.index === 2 && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <SeparateAnimation active={active} />
          </div>
        )}
        {props.index === 3 && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <FoodAlergyAnimation active={active} />
          </div>
        )}
        {props.index === 4 && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <FoodSafetyAnimation active={active} />
          </div>
        )}
        {props.index === 5 && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <PestControlAnimation active={active} />
          </div>
        )}
        {props.index === 6 && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainerExtra"
          >
            <ContaminationAnimation active={active} />
          </div>
        )}
        {props.index === 7 && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <CleaningAnimation active={active} />
          </div>
        )}
        {props.index === 8 && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <VirusAnimation active={active} />
          </div>
        )}

        <div className="cardTitleContainer">
          <h3>{props.title}</h3>
        </div>
      </Card>
    </>
  );
};

export default CustomCard;

//
