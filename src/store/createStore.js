import thunk from "redux-thunk";
import allReducers from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";

const middleware = [
  applyMiddleware(thunk),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : [])
];
export const store = createStore(
  allReducers,
  undefined,
  compose(...middleware)
);
