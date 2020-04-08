import React from "react";
import ArticlesScreen from "./ArticlesScreen";
import Article from "../components/Article";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";

afterEach(cleanup);

test("ArticlesScreen starts without any rended article", () => {
  const { queryByTestId } = render(<ArticlesScreen />);
  expect(queryByTestId("fetch-articles"));
});

test("ArticlesScreen fetch content from API", async () => {
  const content = "This is content of test article";

  // MOCK API
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      status: 200,
      json: () =>
        Promise.resolve({
          content: content
        })
    })
  );

  const { getByTestId } = render(<Article />);
  await wait(() => getByTestId("article-content"));

  expect(getByTestId("article-content").textContent).toBe(content);
});
