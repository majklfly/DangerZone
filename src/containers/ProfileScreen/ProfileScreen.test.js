import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../../utils";
import ProfileScreen from "./ProfileScreen";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<ProfileScreen store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe("ProfileScreen", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      articles: [
        {
          article1: "test text of article 1"
        },
        {
          article2: "test text of article 2"
        },
        {
          article3: "test text of article 3"
        }
      ]
    };
    component = setUp();
  });

  it("should render container for profile info", () => {
    const container = findByTestAttr(component, "profileContainers");
    expect(container.length).toBe(1);
  });

  it("should render username of the active account", () => {
    const text = findByTestAttr(component, "profileUsername");
    expect(text.length).toBe(1);
  });

  it("should render the underline in profile page", () => {
    const text = findByTestAttr(component, "profileUnderline");
    expect(text.length).toBe(1);
  });

  it("should render the container with details", () => {
    const container = findByTestAttr(component, "profileDetailsContainer");
    expect(container.length).toBe(1);
  });

  it("should render label of text", () => {
    const label = findByTestAttr(component, "profileLabels");
    expect(label.length).toBe(1);
  });
  it("should render the content next to label", () => {
    const text = findByTestAttr(component, "profileContent");
    expect(text.length).toBe(1);
  });
});
