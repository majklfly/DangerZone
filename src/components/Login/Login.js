import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Facebook from "../Facebook/Facebook";

import {
  GoogleOutlined,
  FacebookFilled,
  LoadingOutlined
} from "@ant-design/icons";
import icon from "../../assets/icon.jpeg";
import * as actions from "../../store/actions/auth";
import "./Login.css";

import server from "../../api/server";

const NormalLoginForm = props => {
  const [form] = Form.useForm();
  const [navigate, setNavigate] = useState(false);

  if (navigate) {
    return <Redirect to="/homepage/" />;
  }

  const handleSubmit = async () => {
    const values = await form.validateFields();
    props.login(values.username, values.password);
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

  return (
    <div
      className="base-container"
      ref={props.containerRef}
      data-test="base-container"
    >
      <img src={icon} alt="icon" className="image" />
      <div className="content" data-test="content">
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
              data-test="login-form"
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
                <Button
                  onClick={handleSubmit}
                  className="buttonSubmit"
                  data-test="buttonSubmit"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <Button
              onClick={handleGoogleLogin}
              className="googleLogin"
              data-test="googleLogin"
            >
              <GoogleOutlined /> Login with Google account{" "}
            </Button>
            <Facebook className="facebookLogin" data-test="facebookLogin">
              <FacebookFilled className="facebookIcon" />
              Login with Facebook account
            </Facebook>
            <Link to="/terms/">Privacy notice</Link>
            {props.error ? (
              <div style={{ color: "red" }}>Upps, something went wrong</div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.AuthReducer.loading,
    error: state.AuthReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch(actions.authLogin(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
