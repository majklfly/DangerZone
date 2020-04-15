import { types } from "../../actions/actionTypes";
import quizReducer from "./quiz";

describe("Quiz Reducer", () => {
  it("should return default state", () => {
    const newState = quizReducer(undefined, {});
    expect(newState).toEqual({});
  });

  it("should return new state if receiving type", () => {
    const payload = [
      { id: 1, title: "Test1" },
      { id: 2, title: "Test2" },
      { id: 3, title: "Test3" }
    ];
    const newState = quizReducer(undefined, {
      type: types.GET_QUIZ,
      payload: payload
    });
    expect(newState).toEqual({ quiz: payload });
  });
});
