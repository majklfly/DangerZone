import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { Spin } from "antd";

import icon from "../../assets/icon.jpeg";
import * as actions from "../../store/actions/auth";
import "./Signup.css";

const SignupForm = (props) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const values = await form.validateFields();
    const { username, email, password1, password2 } = values;
    props.onAuth(username, email, password1, password2);
  };

  return (
    <div
      className="base-container"
      ref={props.containerRef}
      data-test="base-container"
    >
      <img src={icon} alt="icon" className="SignupImage" />
      <div className="content" data-test="content">
        {props.loading ? (
          <Spin size="large" />
        ) : (
          <>
            <Form
              form={form}
              onSubmit={handleSubmit}
              className="signup-form"
              hideRequiredMark={true}
              data-test="signup-form"
            >
              <Form.Item className="signup-form-group">
                <Input placeholder="Username" className="form-group-input" />
              </Form.Item>
              <Form.Item className="signup-form-group" name="email">
                <Input placeholder="Email" className="form-group-input" />
              </Form.Item>
              <Form.Item className="signup-form-group" name="password1">
                <Input
                  type="password"
                  placeholder="Password"
                  className="form-group-input"
                />
              </Form.Item>
              <Form.Item className="signup-form-group" name="password2">
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-group-input"
                />
              </Form.Item>
              <Form.Item>
                <Button onClick={handleSubmit} className="buttonSubmit">
                  Sign up
                </Button>
              </Form.Item>
            </Form>
            {props.error !== null ? (
              <div style={{ color: "red" }}>{props.error.username}</div>
            ) : null}
            {props.error !== null ? (
              <div style={{ color: "red" }}>{props.error.email}</div>
            ) : null}
            {props.error !== null ? (
              <div style={{ color: "red" }}>{props.error.password1}</div>
            ) : null}
          </>
        )}
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
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
