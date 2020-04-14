import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../../utils";
import SignupForm from "./Signup";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<SignupForm store={store} loading="test" />)
    .dive()
    .dive();
  return component;
};

describe("SignupForm", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the container for signup form", () => {
    const container = findByTestAttr(component, "base-container");
    expect(container.length).toBe(1);
  });

  it("should render the content of signup form", () => {
    const container = findByTestAttr(component, "content");
    expect(container.length).toBe(1);
  });

  it("should render the form of signup form", () => {
    const form = findByTestAttr(component, "signup-form");
    expect(form.length).toBe(1);
  });
});
