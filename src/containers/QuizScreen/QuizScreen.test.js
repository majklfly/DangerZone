import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../../utils";
import QuizScreen from "./QuizScreen";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<QuizScreen store={store} />)
    .dive()
    .dive();
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
