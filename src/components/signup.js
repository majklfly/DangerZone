import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";
import icon from "../assets/icon.jpeg";
import * as actions from "../store/actions/auth";
import "./Login.scss";

import server from "../api/server";

const SignupForm = props => {
  const [form] = Form.useForm();
  const [navigate, setNavigate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (navigate) {
    return <Redirect to="/homepage/" />;
  }

  const handleSubmit = async () => {
    const values = await form.validateFields();
    server
      .post("rest-auth/registration", {
        username: values.username,
        email: values.email,
        password1: values.password1,
        password2: values.password2
      })
      .then(res => {
        if (res.status === 201) {
          localStorage.setItem("token", res.data.key);
          setNavigate(true);
          window.location.reload();
        }
      })
      .catch(function(error) {
        console.log(error);
        setErrorMessage("Olala, something went wrong.");
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
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    messsage: "Please input your email"
                  }
                ]}
              >
                <Input placeholder="Username" className="form-group-input" />
              </Form.Item>
              <Form.Item
                className="form-group"
                name="password1"
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
              <Form.Item
                className="form-group"
                name="password2"
                label="Confirm password"
                rules={[
                  {
                    required: true,
                    messsage: "Please confirm your Password!"
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
                  Sign up
                </Button>
              </Form.Item>
            </Form>
            <div style={{ color: "red" }}>{errorMessage}</div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
