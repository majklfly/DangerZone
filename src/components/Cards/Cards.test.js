import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";
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
    push: jest.fn()
  })
}));

describe("Cards", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      chapterReducer: {
        chapters: [[1, "Test1"], [2, "Test2"]]
      },
      userDataReducer: {
        chapterdata: [
          { id: 1, chaptertitle: "Test1" },
          { id: 2, chaptertitle: "Test3" }
        ]
      }
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
    expect(card.length).toBe(2);
  });
});
