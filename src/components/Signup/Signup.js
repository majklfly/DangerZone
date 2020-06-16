import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";

import { LoadingOutlined } from "@ant-design/icons";
import icon from "../../assets/icon.jpeg";
import * as actions from "../../store/actions/auth";
import "../Login/Login.css";

const SignupForm = props => {
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
              className="signup-form"
              hideRequiredMark={true}
              data-test="signup-form"
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

const mapStateToProps = state => {
  return {
    loading: state.AuthReducer.loading,
    error: state.AuthReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
