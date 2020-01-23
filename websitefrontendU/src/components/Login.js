import React from "react";
import { Form, Icon, Input, Spin } from "antd";
import { connect } from "react-redux";

import icon from "../assets/icon.jpeg";
import * as actions from "../store/actions/auth";
import "./Login.scss";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.username, values.password);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <img src={icon} alt="icon" className="image" />
          {this.props.loading ? (
            <Spin indicator={antIcon} />
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
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
              <Form.Item className="form-group">
                <button type="primary" htmltype="submit" className="btn">
                  Log in
                </button>
              </Form.Item>
              {errorMessage}
            </Form>
          )}
        </div>
      </div>
    );
  }
}

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

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
)(WrappedNormalLoginForm);
