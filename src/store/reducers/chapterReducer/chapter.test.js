import { types } from "../../actions/actionTypes";
import { updatedObject } from "../../utility";
import chapterReducer from "./chapter";

describe("Chapter Reducer", () => {
  // it("should return default state", () => {
  //   const newState = chapterReducer(undefined, {});
  //   expect(newState).toBe({});
  // });

  it("should return new state if receiving type", () => {
    const payload = {
      articles: [],
      description: "Test1",
      id: 1,
      quiz: 2,
      title: "Test2"
    };
    const newState = chapterReducer(undefined, {
      type: types.GET_CHAPTER,
      payload: payload
    });
    expect(newState).toEqual(payload);
  });
});
