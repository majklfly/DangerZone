import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  GoogleOutlined,
  FacebookFilled,
  LoadingOutlined
} from "@ant-design/icons";
import icon from "../assets/icon.jpeg";
import * as actions from "../store/actions/auth";
import "./Login.scss";

import server from "../api/server";

const NormalLoginForm = props => {
  const [form] = Form.useForm();
  const [navigate, setNavigate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // form.validateFields(["username"]);
    // form.validateFields(["password"]);
  });

  if (navigate) {
    return <Redirect to="/homepage/" />;
  }

  const handleSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    server
      .post("rest-auth/login/", {
        username: values.username,
        password: values.password
      })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.key);
          setNavigate(true);
          window.location.reload();
        }
      })
      .catch(function(error) {
        console.log(error);
        setErrorMessage("Olala, try again. Your details are not matching...");
      });
  };

  const handleGoogleLogin = () => {
    server.get("accounts/google/login").then(res => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.key);
        setNavigate(true);
        window.location.reload();
      }
    });
  };

  const handleFacebookLogin = () => {
    server.get("accounts/facebook/login").then(res => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.key);
        setNavigate(true);
        window.location.reload();
      }
    });
  };

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="content">
        <img src={icon} alt="icon" className="image" />
        {props.loading ? (
          <LoadingOutlined />
        ) : (
          <>
            <Form
              form={form}
              onSubmit={handleSubmit}
              name="dynamic_rule"
              className="login-form"
              hideRequiredMark={true}
            >
              <Form.Item
                className="form-group"
                name="username"
                label="Username"
                rules={[
                  {
                    required: true,
                    messsage: "Please input your Username"
                  }
                ]}
              >
                <Input placeholder="Username" className="form-group-input" />
              </Form.Item>
              <Form.Item
                className="form-group"
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    messsage: "Please input your Password!"
                  }
                ]}
              >
                <Input
                  type="password"
                  placeholder="Password"
                  className="form-group-input"
                />
              </Form.Item>
              <Form.Item>
                <Button onClick={handleSubmit} className="buttonSubmit">
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <Button onClick={handleGoogleLogin} className="googleLogin">
              <GoogleOutlined /> Login with Google account{" "}
            </Button>
            <Button onClick={handleFacebookLogin} className="facebookLogin">
              <FacebookFilled className="facebookIcon" />
              Login with Facebook account
            </Button>
            <div style={{ color: "red" }}>{errorMessage}</div>
          </>
        )}
      </div>
    </div>
  );
};

// const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NormalLoginForm);
