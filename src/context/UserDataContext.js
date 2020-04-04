import React, { useState } from "react";

import server from "../api/server";

const UserDataContext = React.createContext();

const username = localStorage.getItem("username");

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [profileId, setProfileId] = useState(0);

  const getUserData = () => {
    server.get("/userdata/").then(res => {
      res.data.map(item => {
        return item.username === username
          ? (setUserData(item), setProfileId(item.profileId))
          : null;
      });
    });
  };

  return (
    <UserDataContext.Provider value={{ userData, getUserData, profileId }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
