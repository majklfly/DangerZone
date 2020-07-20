import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import { LoginBackgroundSVG } from "../LoginBackgroundSVG/LoginBackgroundSVG";

const setUp = () => {
  const wrapper = shallow(<LoginBackgroundSVG />);

  return wrapper;
};

describe("LoginBackgroundSVG", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the background", () => {
    const background = findByTestAttr(wrapper, "LoginBackgroundSVGContainer");
    expect(background.length).toBe(1);
  });
});
