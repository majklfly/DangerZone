import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import LoginScreen from "./LoginScreen";

const setUp = () => {
  const component = shallow(<LoginScreen />);
  return component;
};

describe("LoginScreen", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the login container", () => {
    const container = findByTestAttr(component, "App");
    expect(container.length).toBe(1);
  });

  it("should render the container for forms", () => {
    const container = findByTestAttr(component, "container");
    expect(container.length).toBe(1);
  });

  it("should render the login form if active", () => {
    const form = findByTestAttr(component, "LoginForm");
    expect(form.length).toBe(1);
  });

  // it("should render the signup form if active", () => {
  //   const form = findByTestAttr(component, "SignupForm");
  //   expect(form.length).toBe(1);
  // });
});
