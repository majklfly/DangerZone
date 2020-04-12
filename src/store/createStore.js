import thunk from "redux-thunk";
import allReducers from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
