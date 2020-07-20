import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";
import Article from "../Article/Article";
import { findByTestAttr, testStore } from "../../utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Cards store={store} />)
    .dive()
    .dive();
  return component;
};

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Cards", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      chapterReducer: {
        chapters: [
          { id: 1, title: "Test1" },
          { id: 2, title: "Test3" },
        ],
      },
      userDataReducer: {
        chapterdata: [
          { id: 1, chapterTitle: "Test1", completed: true },
          { id: 2, chapterTitle: "Test3", completed: false },
          { id: 3, chapterTitle: "Test4", completed: true },
        ],
      },
    };
    component = setUp(initialState);
  });

  it("should render the container for the cards", () => {
    const container = findByTestAttr(component, "container");
    expect(container.length).toBe(1);
  });

  it("should render the row of cards", () => {
    const row = findByTestAttr(component, "cards");
    expect(row.length).toBe(1);
  });

  it("should render the active container", () => {
    const card = findByTestAttr(component, "active");
    expect(card.length).toBe(1);
  });

  it("should render the inactive container", () => {
    const card = findByTestAttr(component, "inactive");
    expect(card.length).toBe(1);
  });

  it("should render the article after click on the button", () => {
    const card = findByTestAttr(component, "active");
    const articleWrapper = shallow(<Article />);
    card.simulate("click");
    const spinner = findByTestAttr(articleWrapper, "articleSpinner");
    expect(spinner.length).toBe(1);
  });
});
