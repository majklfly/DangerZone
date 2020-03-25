import React from "react";
import { Form, Input, Spin } from "antd";
import { connect } from "react-redux";

import icon from "../assets/icon.jpeg";
import * as actions from "../store/actions/auth";
import "./Login.scss";

class SignupForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(
          values.username,
          values.email,
          values.password1,
          values.password2
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <img src={icon} alt="icon" className="image" />
          {this.props.loading ? (
            // <Spin indicator={antIcon} />
            console.log("loading")
          ) : (
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item className="form-group">
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <Form.Item className="form-group">
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(<Input placeholder="Email" />)}
              </Form.Item>
              <Form.Item className="form-group">
                {getFieldDecorator("password1", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
              <Form.Item className="form-group">
                {getFieldDecorator("password2", {
                  rules: [
                    { required: true, message: "Please confirm your Password!" }
                  ]
                })(<Input type="password" placeholder="Confirm Password" />)}
              </Form.Item>
              <Form.Item className="form-group">
                <button type="primary" htmltype="submit" className="btn">
                  Sign Up
                </button>
              </Form.Item>
            </Form>
          )}
        </div>
      </div>
    );
  }
}

// const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

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
