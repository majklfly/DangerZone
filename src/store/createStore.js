import thunk from "redux-thunk";
import allReducers from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
