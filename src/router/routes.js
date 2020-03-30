import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import server from "../api/server";

import * as actions from "../store/actions/auth";
import { Provider as QuizProvider } from "../context/QuizContext";

import { UserDataContext } from "../context/UserDataContext";

import CloudsScreen from "../containers/CloudsScreen";
import HomepageScreen from "../containers/HomepageScreen";
import ChaptersScreen from "../containers/ChaptersScreen";
import QuizScreen from "../containers/QuizScreen";

import ArticlesScreen from "../containers/ArticlesScreen";

import ResponsiveNavigation from "../containers/Layout/Layout";

const BaseRouter = () => {
  const [userData, setUserData] = useState([]);

  const logout = () => {
    actions.logout();
    window.location.reload();
  };

  const getUserData = () => {
    const username = localStorage.getItem("username");
    const UserData = [];
    server.get("userdata/").then(res => {
      res.data.map(item => {
        return item.username === username ? UserData.push(item) : null;
      });
    });
    setUserData(UserData);
  };

  useEffect(getUserData, []);

  const navLinks = [
    {
      text: "Homepage",
      path: "/homepage/",
      icon: "icon ion-md-home"
    },
    {
      text: "Technology clouds",
      path: "/clouds/",
      icon: "icon ion-md-contact"
    },
    {
      text: "MammaMia!",
      path: "/chapters/",
      icon: "icon ion-md-school"
    },
    {
      text: "Logout",
      path: "/",
      icon: "icon ion-md-exit",
      action: logout
    }
  ];

  return (
    <>
      <Router>
        <UserDataContext.Provider value={{ userData, setUserData }}>
            <QuizProvider>
              <ResponsiveNavigation navLinks={navLinks} />
              <div>
                <Route exact path="/homepage/" component={HomepageScreen} />
                <Route exact path="/clouds/" component={CloudsScreen} />
                <Route exact path="/chapters/" component={ChaptersScreen} />
                <Route exact path="/chapter/" component={ArticlesScreen} />
                <Route exact path="/chapter/quiz/" component={QuizScreen} />
              </div>
            </QuizProvider>
        </UserDataContext.Provider>
      </Router>
    </>
  );
};

export default BaseRouter;
