import React, { useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Facebook from "../Facebook/Facebook";

import { FacebookFilled } from "@ant-design/icons";
import { Spin } from "antd";
import icon from "../../assets/icon.jpeg";
import * as actions from "../../store/actions/auth";
import "./Login.css";

const NormalLoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    props.login(username, password);
  };

  return (
    <div
      className="base-container"
      ref={props.containerRef}
      data-test="base-container"
    >
      <img src={icon} alt="icon" className="login_image" />
      <div className="content" data-test="content">
        {props.loading ? (
          <Spin size="large" className="spinnerLogin" />
        ) : (
          <>
            <div className="login-form-container">
              <input
                placeholder="username"
                className="login-form-input"
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="chrome-off"
              />
              <input
                placeholder="password"
                className="login-form-input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="chrome-off"
              />
            </div>
          </>
        )}
      </div>
      <div className="LoginButtonsContainer">
        <Button
          onClick={handleSubmit}
          className="buttonSubmit"
          data-test="buttonSubmit"
        >
          Log in
        </Button>
        <Facebook className="facebookLogin" data-test="facebookLogin">
          <FacebookFilled className="facebookIcon" />
          Login with Facebook account
        </Facebook>
        <div>
          <Link to="/terms/" className="privacyNotice">
            Privacy notice
          </Link>
          {"  "}
          <Link to="/sendnespassword/" className="forgotYourPassword">
            Forgot your password?
          </Link>
        </div>
        {props.error ? (
          <div className="errorMessageLogin">
            {props.error.password && "Missing password"}
            {props.error.non_field_errors && props.error.non_field_errors}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.AuthReducer.loading,
    error: state.AuthReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
