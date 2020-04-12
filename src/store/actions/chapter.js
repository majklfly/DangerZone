import { types } from "./actionTypes";

import server from "../../api/server";

const token = localStorage.getItem("token");

export const getChapter = currentChapterId => async dispatch => {
  await server
    .get(`/chapters/${currentChapterId}/`, {
      headers: { authorization: `Token ${token}` }
    })
    .then(res => {
      console.log("runned", res);
      console.log("currentChapterId", currentChapterId);
      dispatch({
        type: types.GET_CHAPTERS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
