import React, { useState } from "react";
import { connect } from "react-redux";
import { Progress } from "antd";
import { Link } from "react-router-dom";

import server from "../api/server";

import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import * as actions from "../store/actions/auth";

import "./UserBoard.scss";
import "font-awesome/css/font-awesome.min.css";

const UserBoard = props => {
  const [percentage, setPercentage] = useState(0);

  const username = localStorage.getItem("username");

  const calculatePercentage = async () => {
    const chapters = await server.get("/chapters/");
    const chapterData = await server.get("/chapterdata/");
    const finishedChapters = [];
    chapterData.data.map(item => {
      return item.username === username && item.completed === true
        ? finishedChapters.push(item)
        : null;
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
          width="110px"
        />
        <div className="iconsContainer">
          <Link to="/profile/">
            <UserOutlined className="iconBoard" />
          </Link>
          <Link to="/" onClick={actions.logout}>
            <LogoutOutlined className="iconBoard" />
          </Link>
        </div>
        <div className="welcomeText">Hello {props.userData}</div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const userData = state.userData;
  return { userData };
};

export default connect(mapStateToProps)(UserBoard);
