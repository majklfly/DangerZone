import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import QuizScreen from "./QuizScreen";

const setUp = () => {
  const component = shallow(<QuizScreen />);
  return component;
};

describe("QuizScreen", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the container for quiz", () => {
    const container = findByTestAttr(component, "carousel");
    expect(container.length).toBe(1);
  });

  it("should render the quiz component", () => {
    const quiz = findByTestAttr(component, "quizContainer");
    expect(quiz.length).toBe(1);
  });
});
