import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.css";

import BaseRouter from "./router/routes";
import AuthRouter from "./router/authRoutes";

import * as actions from "./store/actions/auth";

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    if (localStorage.getItem("token")) {
      return (
        <div>
          <Router>
            <BaseRouter {...this.props} />
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          <Router>
            <AuthRouter />
          </Router>
        </div>
      );
    }
  }
  static navigationOptions = {
    title: 'hello'
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
