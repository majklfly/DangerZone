import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import CloudsScreen from "./CloudsScreen";

const setUp = () => {
  const component = shallow(<CloudsScreen />);
  return component;
};

describe("CloudsScreen", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render a list of items", () => {
    const container = findByTestAttr(component, "cloudsList");
    expect(container.length).toBe(1);
  });

  it("should render a item in the list", () => {
    const item = findByTestAttr(component, "cloudListItem");
    expect(item.length).toBe(1);
  });

  it("should render the avatar of the item", () => {
    const avatar = findByTestAttr(component, "cloudListAvatar");
    expect(avatar.length).toBe(1);
  });

  it("should render the text of the item", () => {
    const text = findByTestAttr(component, "cloudListItemText");
    expect(text.length).toBe(1);
  });
});
