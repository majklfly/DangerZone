import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Provider as QuizProvider } from "../context/QuizContext";

import CloudsScreen from "../containers/CloudsScreen/CloudsScreen";
import HomepageScreen from "../containers/HomepageScreen/HomepageScreen";
import ChaptersScreen from "../containers/ChaptersScreen/ChaptersScreen";
import QuizScreen from "../containers/QuizScreen/QuizScreen";
import ProfileScreen from "../containers/ProfileScreen/ProfileScreen";

import ArticlesScreen from "../containers/ArticlesScreen/ArticlesScreen";

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
            <Route exact path="/homepage/" component={HomepageScreen} />
            <Route exact path="/clouds/" component={CloudsScreen} />
            <Route exact path="/chapters/" component={ChaptersScreen} />
            <Route exact path="/chapter/" component={ArticlesScreen} />
            <Route exact path="/chapter/quiz/" component={QuizScreen} />
            <Route exact path="/profile/" component={ProfileScreen} />
          </div>
        </QuizProvider>
      </Router>
    </>
  );
};

export default BaseRouter;
