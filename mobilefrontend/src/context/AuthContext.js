import { AsyncStorage } from "react-native";
import React from "react";
import axios from "axios";

import createDataContext from "./createDataContext";
import server from "../api/server";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { errorMessage: action.payload };
    case "singin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("Topics");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = dispatch => {
  return async ({ username, email, password1, password2 }) => {
    try {
      const response = await server.post("/rest-auth/registration", {
        username,
        email,
        password1,
        password2
      });
      await AsyncStorage.setItem("token", response.data.key);
      dispatch({ type: "signin", payload: response.data.key });
      navigate("Topics");
    } catch (err) {
      dispatch({ type: "add_error", payload: err.response.data });
    }
  };
};

const signin = dispatch => {
  return async ({ username, email, password }) => {
    try {
      const response = await server.post("/rest-auth/login/", {
        username,
        email,
        password
      });
      console.log(response);
      await AsyncStorage.setItem("token", response.data.key);
      dispatch({ type: "signin", payload: response.data.key });
      navigate("Topics");
    } catch (err) {
      console.log(err);
      dispatch({ type: "add_error", payload: err.response.data });
    }
  };
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("Signup");
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { errorMessage: {} }
);
