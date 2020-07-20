import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LogoutOutlined,
  AndroidOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import * as actions from "../../store/actions/auth";
import { getUserData } from "../../store/actions/userData";

import server from "../../api/server";
import "./UserBoard.css";

const userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");

const UserBoard = (props) => {
  const [percentage, setPercentage] = useState(0);

  const calculatePercentage = async () => {
    const chapters = await server.get("/chapters/", {
      headers: { authorization: `Token ${token}` },
    });
    const finishedChapters = [];
    props.userData.chapterdata.map((item) => {
      return item.completed === true ? finishedChapters.push(item) : null;
    });
    const total = chapters.data.length;
    const current = finishedChapters.length;
    const percent = (current / (total / 100)).toFixed(1);
    setPercentage(percent);
  };
  calculatePercentage();

  useEffect(() => props.getUserData(userId, token), []); //eslint-disable-line

  const logout = () => {
    props.logout();
    setTimeout(function () {
      window.location.reload();
    }, 5);
  };

  return (
    <>
      <div className="userboard" data-test="userboard">
        <Progress
          strokeColor={{
            "100%": "#364d79",
          }}
          type="circle"
          percent={percentage}
          className="progressBar"
          data-test="progressBar"
        />
        <div className="welcomeText" data-test="welcomeText">
          {props.userData.username.split("@")[0]}
        </div>

        <div className="iconsContainer" data-test="iconsContainer">
          <a href="https://play.google.com/" className="iconBoard">
            <AndroidOutlined />
          </a>
          <Link to="/profile/" className="iconBoard">
            <UserOutlined />
          </Link>
          <Link to="/" onClick={logout} className="iconBoard">
            <LogoutOutlined />
          </Link>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.AuthReducer.token,
    userData: state.userDataReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (userId, token) => {
      dispatch(getUserData(userId, token));
    },
    logout: () => {
      dispatch(actions.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);
