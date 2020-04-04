import server from "../api/server";

import createDataContext from "./createDataContext";

const quizReducer = (state, action) => {
  switch (action.type) {
    case "post_test_results":
      return [
        ...state,
        {
          correct_answers: action.payload.correct_answers,
          completed: action.payload.isCompleted,
          user: action.payload.userId,
          chapter: action.payload.chapterId,
          userData: action.payload.userDataId
        }
      ];
    default:
      return state;
  }
};

const postTestResults = dispatch => {
  return async (
    correct_answers,
    isCompleted,
    userId,
    chapterId,
    userDataId
  ) => {
    try {
      await server.post("/chapterdata/", {
        correct_answers: correct_answers,
        completed: isCompleted,
        user: userId,
        chapter: chapterId,
        userData: userDataId
      });
      dispatch({
        type: "post_test_results",
        payload: { correct_answers, isCompleted, userId, chapterId, userDataId }
      });
    } catch (e) {
      console.log(e);
    }
  };
};
export const { Context, Provider } = createDataContext(
  quizReducer,
  {
    postTestResults
  },
  []
);
