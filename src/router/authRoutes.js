import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import LoginScreen from "../containers/LoginScreen";

const AuthRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Route exact path="" component={LoginScreen} />
        </div>
      </Router>
      ;
    </>
  );
};

export default AuthRouter;
