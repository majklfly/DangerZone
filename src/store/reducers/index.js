import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthReducer from "./auth";
import userDataReducer from "./userData";
import chapterReducer from "./chapter";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userDataReducer"]
};

export const rootReducer = combineReducers({
  AuthReducer,
  userDataReducer,
  chapterReducer
});

export default persistReducer(persistConfig, rootReducer);
