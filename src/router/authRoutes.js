import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import TermsScreen from "../containers/TermsScreen/TermsScreen";
import LoginScreen from "../containers/LoginScreen/LoginScreen";

const AuthRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Route exact path="" component={LoginScreen} />
          <Route exact path="/terms/" component={TermsScreen} />
        </div>
      </Router>
      ;
    </>
  );
};

export default AuthRouter;
