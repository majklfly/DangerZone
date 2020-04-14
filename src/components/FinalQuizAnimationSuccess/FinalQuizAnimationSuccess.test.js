import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import { FinalQuizAnimationSuccess } from "./FinalQuizAnimationSuccess";

const setUp = () => {
  const component = shallow(<FinalQuizAnimationSuccess />);
  return component;
};

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("FinalQuizAnimationSuccess", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the container for success animation", () => {
    const container = findByTestAttr(component, "QuizAnimationContainer");
    expect(container.length).toBe(1);
  });

  it("should render the text of the success animation", () => {
    const text = findByTestAttr(component, "failedAnimationText");
    expect(text.length).toBe(1);
  });

  it("should render the button of the animation", () => {
    const button = findByTestAttr(component, "successAnimationButton");
    expect(button.length).toBe(1);
  });

  it("should render the success animation", () => {
    const animation = findByTestAttr(component, "successAnimation");
    expect(animation.length).toBe(1);
  });
});
