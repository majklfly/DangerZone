import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthReducer from "./auth";
import userDataReducer from "./userData";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userDataReducer"]
};

const rootReducer = combineReducers({
  AuthReducer,
  userDataReducer
});

export default persistReducer(persistConfig, rootReducer);
