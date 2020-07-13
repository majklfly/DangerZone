import { types } from "./actionTypes";

import server from "../../api/server";

export const getUserData = (userId, token) => async (dispatch) => {
  const parsedUserId = parseInt(userId);
  if (token) {
    await server
      .get(`/userdata/`, {
        headers: { authorization: `Token ${token}` },
      })
      .then((res) => {
        res.data.map((item) => {
          if (item.userId === parsedUserId) {
            return dispatch({
              type: types.GET_USERDATA,
              payload: item,
            });
          }
          return null;
        });
      })
      .catch((err) => [console.log(err)]);
  }
};

export const setUser = (token) => async (dispatch) => {
  await server
    .post(`/social/`, {
      provider: "facebook",
      access_token: token,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.id);
      // window.location.reload();
      dispatch({
        type: types.SET_USER,
        payload: res.data,
      });
    });
};
