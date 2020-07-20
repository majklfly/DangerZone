import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import { VocabularyOfDay } from "../VocabularyOfDay/VocabularyOfDay";

const setUp = () => {
  const wrapper = shallow(<VocabularyOfDay />);

  return wrapper;
};

describe("VocabularyOfDay", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "VocabularyOfDayContainer");
    expect(container.length).toBe(1);
  });
});
