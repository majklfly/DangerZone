import React from "react";
import { shallow } from "enzyme";
import ArticlesScreen from "./ArticlesScreen";
import { findByTestAttr, testStore } from "../../utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<ArticlesScreen store={store} />)
    .dive()
    .dive();
  return component;
};

describe("ArticlesScreen Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the articlescreen container", () => {
    const component = setUp();
    const container = findByTestAttr(component, "ArticlesScreenContainer");
    expect(container.length).toBe(1);
  });

  it("should render the articles", () => {
    const component = setUp();
    const articles = findByTestAttr(component, "articles");
    expect(articles.length).toBe(1);
  });

  it("should render the button", () => {
    const component = setUp();
    const button = findByTestAttr(component, "ArticlesScreenButton");
    expect(button.length).toBe(1);
  });
});
