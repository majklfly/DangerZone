import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import AboutScreen from "../AboutScreen/AboutScreen";

const setUp = () => {
  const wrapper = shallow(<AboutScreen />);

  return wrapper;
};

describe("AboutScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "AboutScreenContainer");
    expect(container.length).toBe(1);
  });
});
