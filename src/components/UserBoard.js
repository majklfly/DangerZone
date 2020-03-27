import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";

import { UserOutlined } from "@ant-design/icons";

import "./UserBoard.scss";
import "font-awesome/css/font-awesome.min.css";

const UserBoard = props => {
  return (
    <>
      <div className="userboard">
        <Button type="primary" className="profilePageButton">
          <UserOutlined />
          Profile page
        </Button>
        <div className="welcome-board">Hello {props.userData}</div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const userData = state.userData;
  return { userData };
};

export default connect(mapStateToProps)(UserBoard);
