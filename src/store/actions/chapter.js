import { types } from "./actionTypes";

import server from "../../api/server";

const token = localStorage.getItem("token");

export const getChapter = currentChapterId => async dispatch => {
  await server
    .get(`/chapters/${currentChapterId}/`, {
      headers: { authorization: `Token ${token}` }
    })
    .then(res => {
      dispatch({
        type: types.GET_CHAPTER,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getChapters = () => async dispatch => {
  await server
    .get("/chapters/", {
      headers: { authorization: `Token ${token}` }
    })
    .then(res => {
      dispatch({
        type: types.GET_CHAPTERS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
