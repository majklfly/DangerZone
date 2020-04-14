import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import { FinalQuizAnimationFailed } from "./FinalQuizAnimationFailed";

const setUp = () => {
  const component = shallow(<FinalQuizAnimationFailed />);
  return component;
};

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("FinalQuizAnimationFailed", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the container of the animation", () => {
    const container = findByTestAttr(component, "failedAnimationContainer");
    expect(container.length).toBe(1);
  });

  it("should render the top animation text", () => {
    const text = findByTestAttr(component, "failedAnimationText");
    expect(text.length).toBe(1);
  });

  it("should render the second animation text", () => {
    const text = findByTestAttr(component, "failedAnimationText2");
    expect(text.length).toBe(1);
  });

  it("should render the animation button", () => {
    const button = findByTestAttr(component, "failedAnimationButton");
    expect(button.length).toBe(1);
  });

  it("should render the animation", () => {
    const animation = findByTestAttr(component, "failedAnimation");
    expect(animation.length).toBe(1);
  });
});
