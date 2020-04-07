import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Progress } from "antd";
import { Link } from "react-router-dom";

import server from "../api/server";
import { set_userdata } from "../store/actions/userData";
import { useDispatch, useSelector } from "react-redux";

import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import * as actions from "../store/actions/auth";

import "./UserBoard.css";
import "font-awesome/css/font-awesome.min.css";

const token = localStorage.getItem("token");

const UserBoard = props => {
  const [percentage, setPercentage] = useState(0);
  const dispatch = useDispatch();
  const username = localStorage.getItem("username");
  const userData = useSelector(state => state.userDataReducer);

  const calculatePercentage = async () => {
    const chapters = await server.get("/chapters/", {
      headers: { authorization: `Token ${token}` }
    });
    const finishedChapters = [];
    userData.chapterdata.map(item => {
      return item.completed === true ? finishedChapters.push(item) : null;
    });
    const total = chapters.data.length;
    const current = finishedChapters.length;
    const percent = (current / (total / 100)).toFixed(0);
    setPercentage(percent);
  };
  calculatePercentage();

  const getUserData = () => {
    server
      .get("/userdata/", {
        headers: { authorization: `Token ${token}` }
      })
      .then(res => {
        res.data.map(item => {
          return item.username === username
            ? dispatch(set_userdata(item))
            : null;
        });
      });
  };

  useEffect(getUserData, []);

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
        <div className="welcomeText">Hello {userData.username}</div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const userData = state.userData;
  return { userData };
};

export default connect(mapStateToProps)(UserBoard);
