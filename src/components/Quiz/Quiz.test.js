import React from "react";
import { shallow } from "enzyme";
import Quiz from "./Quiz";
import { findByTestAttr, testStore } from "../../utils";

const question = {
  questions: [
    {
      answers: [
        { id: 1, text: "text1", is_corrent: true },
        { id: 2, text: "text2", is_corrent: false }
      ]
    }
  ]
};

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Quiz store={store} questions={question} />)
    .dive()
    .dive();
  return component;
};

describe("Quiz component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the carousel for the quiz", () => {
    const carousel = findByTestAttr(component, "carouselQuiz");
    expect(carousel.length).toBe(1);
  });

  it("should render a label of the question", () => {
    const label = findByTestAttr(component, "question-label");
    expect(label.length).toBe(1);
  });

  it("should render the answer bottons", () => {
    const button = findByTestAttr(component, "answer-buttons");
    expect(button.length).toBe(2);
  });
});
