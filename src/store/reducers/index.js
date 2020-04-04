import AuthReducer from "./auth";
import userDataReducer from "./userData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  AuthReducer,
  userDataReducer
});

export default allReducers;
