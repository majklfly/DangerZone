import React, { useState } from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import * as actions from "../store/actions/auth";

import server from "../api/server";
import "./UserBoard.css";

const token = localStorage.getItem("token");

const userData = [
  { username: "Peter" },
  {
    chapterdata: {
      one: "test1",
      two: "two"
    }
  }
];

const UserBoard = props => {
  const [percentage, setPercentage] = useState(0);

  const calculatePercentage = async () => {
    const chapters = await server.get("/chapters/", {
      headers: { authorization: `Token ${token}` }
    });
    const finishedChapters = [];
    props.userData.chapterdata.map(item => {
      return item.completed === true ? finishedChapters.push(item) : null;
    });
    const total = chapters.data.length;
    const current = finishedChapters.length;
    const percent = (current / (total / 100)).toFixed(0);
    setPercentage(percent);
  };
  calculatePercentage();

  return (
    <>
      <div className="userboard">
        <Progress
          strokeColor={{
            "100%": "#364d79"
          }}
          type="circle"
          percent={percentage}
          className="progressBar"
        />
        <div className="iconsContainer">
          <Link to="/profile/">
            <UserOutlined className="iconBoard" />
          </Link>
          <Link to="/" onClick={actions.logout}>
            <LogoutOutlined className="iconBoard" />
          </Link>
        </div>
        <div className="welcomeText">Hello {userData.username}</div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.userDataReducer
  };
};

export default connect(mapStateToProps)(UserBoard);
