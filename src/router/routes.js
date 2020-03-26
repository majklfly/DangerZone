import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import * as actions from "../store/actions/auth";
import { Provider as QuizProvider } from "../context/QuizContext";

import { ChaptersContext } from "../context/ChaptersContext";

import CloudsScreen from "../containers/CloudsScreen";
import HomepageScreen from "../containers/HomepageScreen";
import ChaptersScreen from "../containers/ChaptersScreen";
import QuizScreen from "../containers/QuizScreen";

import ArticlesScreen from "../containers/ArticlesScreen";

import ResponsiveNavigation from "../containers/Layout/Layout";

const BaseRouter = () => {
  const [currentChapter, setCurrentChapter] = useState(1);

  const logout = () => {
    actions.logout();
    window.location.reload();
  };

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
        <ChaptersContext.Provider value={{ currentChapter, setCurrentChapter }}>
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
        </ChaptersContext.Provider>
      </Router>
    </>
  );
};

export default BaseRouter;
