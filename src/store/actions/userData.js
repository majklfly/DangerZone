import { types } from "./actionTypes";

import server from "../../api/server";

const userId = 7;
const token = localStorage.getItem("token");

export const getUserData = username => async dispatch => {
  await server
    .get(`/userdata/${userId}`, {
      headers: { authorization: `Token ${token}` }
    })
    .then(res => {
      dispatch({
        type: types.GET_USERDATA,
        payload: res.data
      });
    })
    .catch(err => [console.log(err)]);
};
