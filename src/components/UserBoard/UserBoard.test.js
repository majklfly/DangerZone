import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../../utils";
import UserBoard from "./UserBoard";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<UserBoard store={store} />)
    .dive()
    .dive();
  return component;
};

describe("UserBoard", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the container of userboard", () => {
    const container = findByTestAttr(component, "userboard");
    expect(container.length).toBe(1);
  });

  it("should render the circle progressbar", () => {
    const bar = findByTestAttr(component, "progressBar");
    expect(bar.length).toBe(1);
  });

  it("should render the icons container", () => {
    const container = findByTestAttr(component, "iconsContainer");
    expect(container.length).toBe(1);
  });

  it("should render the welcome text", () => {
    const text = findByTestAttr(component, "welcomeText");
    expect(text.length).toBe(1);
  });
});
