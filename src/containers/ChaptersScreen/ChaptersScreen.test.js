import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import ChaptersScreen from "./ChaptersScreen";

const setUp = () => {
  const component = shallow(<ChaptersScreen />);
  return component;
};

describe("ChaptersScreen", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render containers with cards", () => {
    const container = findByTestAttr(component, "container-cards");
    expect(container.length).toBe(1);
  });

  it("should render cards component inside the container", () => {
    const container = findByTestAttr(component, "cards");
    expect(container.length).toBe(1);
  });
});
