import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../../utils";
import Login from "./Login";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Login store={store} loading="test" />)
    .dive()
    .dive();
  return component;
};

describe("Login", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the container for login", () => {
    const container = findByTestAttr(component, "base-container");
    expect(container.length).toBe(1);
  });

  it("should render the container for content", () => {
    const container = findByTestAttr(component, "content");
    expect(container.length).toBe(1);
  });

  it("should render the form of login form", () => {
    const form = findByTestAttr(component, "login-form");
    expect(form.length).toBe(1);
  });

  it("should render the submit button", () => {
    const button = findByTestAttr(component, "buttonSubmit");
    expect(button.length).toBe(1);
  });

  it("should render the google button", () => {
    const button = findByTestAttr(component, "googleLogin");
    expect(button.length).toBe(1);
  });

  it("should render the facebookLogin", () => {
    const button = findByTestAttr(component, "facebookLogin");
    expect(button.length).toBe(1);
  });
});
