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
        {props.title === "Handwashing" && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainerExtra"
          >
            <HandWashingAnimation active={active} />
          </div>
        )}
        {props.title === "Separate" && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <SeparateAnimation active={active} />
          </div>
        )}
        {props.title === "Food Allergy" && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <FoodAlergyAnimation active={active} />
          </div>
        )}
        {props.title === "Food Safety" && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <FoodSafetyAnimation active={active} />
          </div>
        )}
        {props.title === "Pest Control" && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <PestControlAnimation active={active} />
          </div>
        )}
        {props.title === "Physical and Chemical  contamination" && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainerExtra"
          >
            <ContaminationAnimation active={active} />
          </div>
        )}
        {props.title === "Effective Cleaning" && (
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="cardAnimationContainer"
          >
            <CleaningAnimation active={active} />
          </div>
        )}
        {props.title === "Bacteria and Viruses in Food" && (
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
