import React, { useState } from "react";

import { ProfileForm } from "../components/ProfileForm";
import { useSelector } from "react-redux";

import {
  TwitterOutlined,
  FacebookFilled,
  InstagramOutlined
} from "@ant-design/icons";

import { ProfileAnimation } from "../components/ProfileAnimation";

import "./ProfileScreen.scss";

const ProfileScreen = () => {
  const userData = useSelector(state => state.userDataReducer);
  const [profileData] = useState({});

  return (
    <>
      <div className="profileContainers">
        <div className="leftContainer">
          <h1 className="profileUsername">{userData.username}</h1>
          <hr className="profileUnderline"></hr>
          <div className="profileDetailsContainer">
            <div className="displayDetails">
              <h2 className="profileLabels">First Name:</h2>
              <h2 className="profileContent">{userData.firstName}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Second Name:</h2>
              <h2 className="profileContent">{userData.lastName}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Email:</h2>
              <h2 className="profileContent">{userData.email}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Company:</h2>
              <h2 className="profileContent">{userData.company}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Position:</h2>
              <h2 className="profileContent">{userData.position}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Country:</h2>
              <h2 className="profileContent">{userData.country}</h2>
            </div>
            <div className="displayDetails">
              <h2 className="profileLabels">Account Expired:</h2>
              <h2 className="profileContent"> </h2>
            </div>
            <div className="profileIconsContainer">
              <TwitterOutlined
                className="profileIcon"
                onClick={() => (window.location.href = `${userData.twitter}`)}
              />
              <FacebookFilled
                className="profileIcon"
                onClick={() => (window.location.href = `${userData.facebook}`)}
              />
              <InstagramOutlined
                className="profileIcon"
                onClick={() => (window.location.href = `${userData.instagram}`)}
              />
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <ProfileAnimation />
          <div className="profileFormContainer">
            <ProfileForm userId={profileData.user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
