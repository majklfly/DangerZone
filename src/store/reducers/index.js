import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthReducer from "./authReducer/auth";
import userDataReducer from "./userData";
import chapterReducer from "./chapterReducer/chapter";
import quizReducer from "./quizReducer/quiz";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userDataReducer"]
};

export const rootReducer = combineReducers({
  AuthReducer,
  userDataReducer,
  chapterReducer,
  quizReducer
});

export default persistReducer(persistConfig, rootReducer);
