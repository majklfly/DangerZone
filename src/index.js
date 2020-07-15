import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/createStore";
import { SmallScreenWarning } from "./components/SmallScreenWarning/SmallScreenWarning";

const persistor = persistStore(store);

const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <div className="mainAppContainer">
        <App />
      </div>
      <div className="SmallScreenWarning">
        <SmallScreenWarning />
      </div>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
