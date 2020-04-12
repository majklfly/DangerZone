import React from "react";
import { shallow } from "enzyme";
import { AnimBackground } from "./background";
import { findByTestAttr } from "../../utils";

const setUp = () => {
  const component = shallow(<AnimBackground />);
  return component;
};

describe("AnimBackground", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the container for background", () => {
    const container = findByTestAttr(component, "backgroundContainer");
    expect(container.length).toBe(1);
  });

  it("should render the svg animation", () => {
    const animation = findByTestAttr(component, "backgroundWaves");
    expect(animation.length).toBe(1);
  });
});
