import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../../utils";
import { ProfileForm } from "./ProfileForm";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<ProfileForm store={store} />);
  return component;
};

describe("ProfileForm", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the form of profile", () => {
    const form = findByTestAttr(component, "ProfileForm");
    expect(form.length).toBe(1);
  });

  it("should render the submit button", () => {
    const button = findByTestAttr(component, "profileSubmitButton");
    expect(button.length).toBe(1);
  });
});
