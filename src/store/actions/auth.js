import { types } from "./actionTypes";
import server from "../../api/server";

export const authStart = () => {
  return {
    type: types.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: types.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: types.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.clear();
  window.location.reload();
  return {
    type: types.AUTH_LOGOUT,
  };
};

export const authLogin = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    server
      .post("/rest-auth/login/", { username, password })
      .then((res) => {
        if (res.status === 200) {
          const userId = res.data.user.pk;
          localStorage.setItem("username", res.data.user.username);
          localStorage.setItem("token", res.data.key);
          localStorage.setItem("userId", res.data.user.pk);
          dispatch(authSuccess(res.data.key, userId));
          window.location.reload();
        }
      })
      .catch((err) => {
        dispatch(authFail(err.response.data));
      });
  };
};

export const authSignup = (username, email, password1, password2) => {
  return (dispatch) => {
    dispatch(authStart());
    server
      .post("/rest-auth/registration", {
        username,
        email,
        password1,
        password2,
      })
      .then((res) => {
        const token = res.data.key;
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("token", res.data.key);
        localStorage.setItem("userId", res.data.user.pk);
        dispatch(authSuccess(token));
        window.location.reload();
      })
      .catch((err) => {
        dispatch(authFail(err.response.data));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token) {
      dispatch(authSuccess(token, userId));
    }
  };
};
