import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "antd/dist/antd.css";

import BaseRouter from "./router/routes";
import AuthRouter from "./router/authRoutes";

import { AnimBackground } from "./components/background/background";

import { SmallScreenWarning } from "./components/SmallScreenWarning/SmallScreenWarning";

import * as actions from "./store/actions/auth";

const token = localStorage.getItem("token");

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    if (token === null || token.length <= 38) {
      return (
        <div>
          <Router>
            <AuthRouter />
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          <div className="authorizedScreens">
            <AnimBackground />
            <Router>
              <BaseRouter {...this.props} />
            </Router>
          </div>
          <div className="SmallScreenWarning">
            <SmallScreenWarning />
          </div>
        </div>
      );
    }
  }
  static navigationOptions = {
    title: "hello",
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
