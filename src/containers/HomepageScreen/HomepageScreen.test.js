import React from "react";
import { shallow } from "enzyme";
import HomepageScreen from "./HomepageScreen";

import { findByTestAttr, testStore } from "../../utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<HomepageScreen store={store} />)
    .dive()
    .dive();
  return component;
};

describe("HomepageScreen Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    const component = setUp();
    const wrapper = findByTestAttr(component, "welcomeScreenContainer");
    expect(wrapper.length).toBe(1);
  });

  it("should render a svg document", () => {
    const component = setUp();
    const logo = findByTestAttr(component, "logo");
    expect(logo.length).toBe(1);
  });
});
