import React from "react";

import { ProfileForm } from "../../components/ProfileForm/ProfileForm";
import { connect } from "react-redux";

import {
  TwitterOutlined,
  FacebookFilled,
  InstagramOutlined,
} from "@ant-design/icons";

import { ProfileAnimation } from "../../components/ProfileAnimation/ProfileAnimation";

import "./ProfileScreen.css";

const ProfileScreen = (props) => {
  return (
    <>
      <div className="profileContainers" data-test="profileContainers">
        <div className="leftContainer">
          <h1 className="profileUsername" data-test="profileUsername">
            {props.userData.username}
          </h1>
          <hr className="profileUnderline" data-test="profileUnderline"></hr>
          <div
            className="profileDetailsContainer"
            data-test="profileDetailsContainer"
          >
            <div className="displayDetails" data-test="displayDetails">
              <h2 className="profileLabels" data-test="profileLabels">
                First Name:
              </h2>
              <h2 className="profileContent" data-test="profileContent">
                {props.userData.firstName}
              </h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Last Name:</h2>
              <h2 className="profileContent">{props.userData.lastName}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Email:</h2>
              <h2 className="profileContent">{props.userData.email}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Company:</h2>
              <h2 className="profileContent">{props.userData.company}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Position:</h2>
              <h2 className="profileContent">{props.userData.position}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Country:</h2>
              <h2 className="profileContent">{props.userData.country}</h2>
            </div>
            <div className="profileIconsContainer">
              <TwitterOutlined
                className="profileIcon"
                onClick={() => {
                  props.userData.twitter &&
                    (window.location.href = `${props.userData.twitter}`);
                }}
              />
              <FacebookFilled
                className="profileIcon"
                onClick={() => {
                  props.userData.facebook &&
                    (window.location.href = `${props.userData.facebook}`);
                }}
              />
              <InstagramOutlined
                className="profileIcon"
                onClick={() => {
                  props.userData.instagram &&
                    (window.location.href = `${props.userData.instagram}`);
                }}
              />
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <ProfileAnimation />
          <h2>Tell us more about you!</h2>
          <div className="profileFormContainer">
            <ProfileForm userId={props.userData.id} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userDataReducer,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
