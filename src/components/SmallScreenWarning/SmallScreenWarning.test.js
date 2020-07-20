import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import { SmallScreenWarning } from "../SmallScreenWarning/SmallScreenWarning";

const setUp = () => {
  const wrapper = shallow(<SmallScreenWarning />);

  return wrapper;
};

describe("SmallScreenWarning", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the warning", () => {
    const warning = findByTestAttr(wrapper, "SmallScreenWarning");
    expect(warning.length).toBe(1);
  });
});
