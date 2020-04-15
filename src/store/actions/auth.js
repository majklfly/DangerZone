import { types } from "./actionTypes";
import server from "../../api/server";

export const authStart = userData => {
  return {
    type: types.AUTH_START
  };
};

export const authSuccess = (token, userData) => {
  return {
    type: types.AUTH_SUCCESS,
    token: token,
    userData: localStorage.getItem("username")
  };
};

export const authFail = error => {
  return {
    type: types.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("length");
  localStorage.removeItem("username");
  localStorage.removeItem("currentChapter");
  localStorage.removeItem("userId");
  localStorage.removeItem("persist:root");
  window.location.reload();
  return {
    type: types.AUTH_LOGOUT
  };
};

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    console.log("AuthLogin ", username, password);
    localStorage.setItem("username", username);
    const userData = localStorage.getItem("username");
    server
      .post("/rest-auth/login/", { username, password })
      .then(res => {
        const token = res.data.key;
        localStorage.setItem("token", token);
        dispatch(authSuccess(token, userData));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    server
      .post("/rest-auth/registration", {
        username,
        email,
        password1,
        password2
      })
      .then(res => {
        const token = res.data.key;
        localStorage.setItem("token", token);
        dispatch(authSuccess(token));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
    }
  };
};
