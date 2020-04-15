import React from "react";
import { shallow } from "enzyme";
import Article from "./Article";
import { findByTestAttr, testStore } from "../../utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Article articles={["article1", "article2"]} />);

  return component;
};

describe("Article Component", () => {
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

  it("should render the article container", () => {
    const container = findByTestAttr(component, "articleContainer");
    expect(container.length).toBe(1);
  });

  it("should render the toggle right arrow", () => {
    const component = setUp();
    const toggler = findByTestAttr(component, "articleToggleRight");
    expect(toggler.length).toBe(1);
  });

  it("should render the carousel", () => {
    const component = setUp();
    const carousel = findByTestAttr(component, "articleCarousel");
    expect(carousel.length).toBe(1);
  });
  it("should render the toggle left arrow", () => {
    const component = setUp();
    const toggler = findByTestAttr(component, "articleToggleLeft");
    expect(toggler.length).toBe(1);
  });
});
