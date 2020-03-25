import React, { useEffect, useState } from "react";
import { Form, Input, Spin, Button } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import icon from "../assets/icon.jpeg";
import * as actions from "../store/actions/auth";
import "./Login.scss";

import server from "../api/server";

const NormalLoginForm = props => {
  const [form] = Form.useForm();
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    // form.validateFields(["username"]);
    // form.validateFields(["password"]);
  });

  if (navigate) {
    return <Redirect to="/homepage/" />;
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      server
        .post("rest-auth/login/", {
          username: values.username,
          password: values.password
        })
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data.key)
            setNavigate(true)
            window.location.reload()
          }
        });
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const handleGoogleLogin = () => {
    server.get("accounts/google/login").then(res => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.key)
        setNavigate(true)
        window.location.reload()
      }
    });
  }

  const handleFacebookLogin = () => {
    server.get("accounts/facebook/login").then(res => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.key)
        setNavigate(true)
        window.location.reload()
      }
    });
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="content">
        <img src={icon} alt="icon" className="image" />
        {props.loading ? (
          // <Spin indicator={antIcon} />
          console.log("loading")
        ) : (
          <>
            <Form
              form={form}
              onSubmit={handleSubmit}
              name="dynamic_rule"
              className="login-form"
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
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                className="form-group"
                name="password"
                label="Username"
                rules={[
                  {
                    required: true,
                    messsage: "Please input your Password!"
                  }
                ]}
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item className="form-group">
                <Button
                  type="primary"
                  onClick={handleSubmit}
                  className="btn"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <Button onClick={handleGoogleLogin}>Login with Google</Button>
            <Button onClick={handleFacebookLogin}>Login with Facebook</Button>
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
