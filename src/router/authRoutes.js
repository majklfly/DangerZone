import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import TermsScreen from "../containers/TermsScreen/TermsScreen";
import LoginScreen from "../containers/LoginScreen/LoginScreen";
import ResetPasswordScreen from "../containers/ResetPasswordScreen/ResetPasswordScreen";
import SendNewPasswordScreen from "../containers/SendNewPasswordScreen/SendNewPasswordScreen";

const AuthRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/terms/" component={TermsScreen} />
          <Route
            exact
            path="/sendnespassword/"
            component={SendNewPasswordScreen}
          />
          <Route
            exact
            path="/password-reset/:uidb64/:token/"
            component={ResetPasswordScreen}
          />
        </div>
      </Router>
    </>
  );
};

export default AuthRouter;
