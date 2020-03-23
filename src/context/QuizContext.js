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
          quiz: action.payload.quizId
        }
      ];
    default:
      return state;
  }
};
const postTestResults = dispatch => {
  return async (correct_answers, isCompleted, userId, quizId) => {
    try {
      await server.post("/quiztaker/", {
        correct_answers: correct_answers,
        completed: isCompleted,
        user: userId,
        quiz: quizId
      });
      dispatch({
        type: "post_test_results",
        payload: { correct_answers, isCompleted, userId, quizId }
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
