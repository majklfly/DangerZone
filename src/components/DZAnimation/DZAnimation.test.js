import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import { DZAnimation } from "../DZAnimation/DZAnimation";

const setUp = () => {
  const wrapper = shallow(<DZAnimation />);

  return wrapper;
};

describe(findByTestAttr, () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the animation which I hope I will use one day", () => {
    const animation = findByTestAttr(wrapper, "containerWelcomeAnimation");
    expect(animation.length).toBe(1);
  });
});
