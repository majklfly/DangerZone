import React from "react";
import { shallow } from "enzyme";
import Facebook from "./Facebook";
import { findByTestAttr, testStore } from "../../utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Facebook store={store} />)
    .dive()
    .dive();
  return component;
};

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("Facebook Login", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the button of facebook login", () => {
    const container = findByTestAttr(component, "facebookLogin");
    expect(container.length).toBe(1);
  });
});
