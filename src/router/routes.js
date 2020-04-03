import React, { useState, useEffect, useMemo } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import server from "../api/server";

import { Provider as QuizProvider } from "../context/QuizContext";

import { UserDataProvider } from "../context/UserDataContext";

import CloudsScreen from "../containers/CloudsScreen";
import HomepageScreen from "../containers/HomepageScreen";
import ChaptersScreen from "../containers/ChaptersScreen";
import QuizScreen from "../containers/QuizScreen";
import ProfileScreen from "../containers/ProfileScreen";

import ArticlesScreen from "../containers/ArticlesScreen";

import ResponsiveNavigation from "../containers/Layout/Layout";

const BaseRouter = () => {
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
      text: "Food safety Level 2",
      path: "/chapters/",
      icon: "icon ion-md-school"
    }
  ];

  return (
    <>
      <Router>
        <QuizProvider>
          <ResponsiveNavigation navLinks={navLinks} />
          <div>
            <UserDataProvider>
              <Route exact path="/homepage/" component={HomepageScreen} />
              <Route exact path="/clouds/" component={CloudsScreen} />
              <Route exact path="/chapters/" component={ChaptersScreen} />
              <Route exact path="/chapter/" component={ArticlesScreen} />
              <Route exact path="/chapter/quiz/" component={QuizScreen} />
              <Route exact path="/profile/" component={ProfileScreen} />
            </UserDataProvider>
          </div>
        </QuizProvider>
      </Router>
    </>
  );
};

export default BaseRouter;
