import React, { useEffect, useState } from "react";
import server from "../api/server";

import { ProfileAnimation } from "../components/ProfileAnimation";

import "./ProfileScreen.scss";

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState({});
  const username = localStorage.getItem("username");

  const getProfileData = () => {
    server.get("/profile/").then(res => {
      res.data.map(item => {
        if (item.username === username) {
          setProfileData(item);
        }
      });
    });
  };

  useEffect(getProfileData, []);

  console.log(profileData);

  return (
    <>
      <div className="backgroundProfilePage"></div>
      <div className="profileContainers">
        <div className="leftContainer">
          <h1 className="profileUsername">{profileData.username}</h1>
          <hr className="profileUnderline"></hr>
          <div className="profileDetailsContainer">
            {/* <h2>{profileData.firstName}</h2>
            <h2>{profileData.lastName}</h2> */}
          </div>
        </div>
        <div className="rightContainer">
          <ProfileAnimation />
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
