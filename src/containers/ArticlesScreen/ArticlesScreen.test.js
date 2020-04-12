import React from "react";
import { shallow } from "enzyme";
import ArticlesScreen from "./ArticlesScreen";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "../../store/reducers";
import { createStore, compose, applyMiddleware } from "redux";
import { findByTestAttr } from "../../utils";

const store = createStore(allReducers, compose(applyMiddleware(thunk)));

const setUp = () => {
  const component = shallow(
    <Provider store={store}>
      <ArticlesScreen />
    </Provider>
  );
  return component;
};

const currentChapterId = 1;

describe("ArticlesScreen Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render the articlescreen container", () => {
    const component = setUp();
    const container = findByTestAttr(component, "ArticlesScreenContainer");
    expect(container.length).toBe(0);
  });

  it("should render the articles", () => {
    const component = setUp();
    const articles = findByTestAttr(component, "articles");
    expect(articles.length).toBe(0);
  });

  it("should render the button", () => {
    const component = setUp();
    const button = findByTestAttr(component, "ArticlesScreenButton");
    console.log(button);
    expect(button.length).toBe(0);
  });
});
