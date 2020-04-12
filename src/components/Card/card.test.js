import React from "react";
import { shallow } from "enzyme";
import CustomCard from "./Card";
import { findByTestAttr } from "../../utils";

const setUp = () => {
  const component = shallow(<CustomCard />);
  return component;
};

describe("CustomCard", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should return the custom card", () => {
    const card = findByTestAttr(component, "customCard");
    expect(card.length).toBe(1);
  });
});
