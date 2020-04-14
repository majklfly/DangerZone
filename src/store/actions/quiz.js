import { types } from "./actionTypes";
import server from "../../api/server";

const token = localStorage.getItem("token");

export const getQuiz = quizId => async dispatch => {
  await server
    .get(`/quiz/${quizId}/`, {
      headers: { authorization: `Token ${token}` }
    })
    .then(res => {
      dispatch({
        type: types.GET_QUIZ,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const postTestResults = (
  correct_answers,
  is_Completed,
  userId,
  chapterId,
  userDataId
) => {
  server
    .post(
      "/chapterdata/",
      {
        completed: is_Completed,
        correct_answers: correct_answers,
        user: userId,
        userData: userDataId,
        chapter: chapterId
      },
      {
        headers: { authorization: `Token ${token}` }
      }
    )
    .then(res => {
      console.log(res);
    });
};
