import { types } from "./actionTypes";

import server from "../../api/server";

const userId = 7;
const token = localStorage.getItem("token");

export const getUserData = username => async dispatch => {
  await server
    .get(`/userdata/${userId}/`, {
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

export const setUser = token => async dispatch => {
  console.log("actions userdata", token);
  await server
    .post(`/social/`, {
      provider: "facebook",
      access_token: token
    })
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      window.location.reload();
      dispatch({
        type: types.SET_USER,
        payload: res.data
      });
    });
};
