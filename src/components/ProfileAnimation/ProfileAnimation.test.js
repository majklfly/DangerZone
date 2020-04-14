import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import { ProfileAnimation } from "./ProfileAnimation";

const setUp = () => {
  const component = shallow(<ProfileAnimation />);
  return component;
};

describe("ProfileAnimation", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render container for the animation", () => {
    const container = findByTestAttr(component, "profileAnimationContainer");
    expect(container.length).toBe(1);
  });
});
