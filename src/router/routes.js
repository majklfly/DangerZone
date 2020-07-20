import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Provider as QuizProvider } from "../context/QuizContext";

import AboutScreen from "../containers/AboutScreen/AboutScreen";
import HomepageScreen from "../containers/HomepageScreen/HomepageScreen";
import ChaptersScreen from "../containers/ChaptersScreen/ChaptersScreen";
import QuizScreen from "../containers/QuizScreen/QuizScreen";
import ProfileScreen from "../containers/ProfileScreen/ProfileScreen";
import ArticlesScreen from "../containers/ArticlesScreen/ArticlesScreen";
import CertificateScreen from "../containers/CertificateScreen/CertificateScreen";

import ResponsiveNavigation from "../containers/Layout/Layout";

const BaseRouter = () => {
  const navLinks = [
    {
      text: "Dashboard",
      path: "/",
      icon: "icon ion-md-home",
    },
    {
      text: "About DangerZone",
      path: "/about/",
      icon: "icon ion-md-contact",
    },
    {
      text: "HACCP Courses",
      path: "/cards/",
      icon: "icon ion-md-school",
    },
    {
      text: "Print Certificate",
      path: "/certificate/",
      icon: "icon ion-md-paper",
    },
  ];

  return (
    <>
      <Router>
        <QuizProvider>
          <ResponsiveNavigation navLinks={navLinks} />
          <div>
            <Route exact path="/" component={HomepageScreen} />
            <Route exact path="/about/" component={AboutScreen} />
            <Route exact path="/cards/" component={ChaptersScreen} />
            <Route exact path="/chapter/" component={ArticlesScreen} />
            <Route exact path="/chapter/quiz/" component={QuizScreen} />
            <Route exact path="/profile/" component={ProfileScreen} />
            <Route exact path="/certificate/" component={CertificateScreen} />
          </div>
        </QuizProvider>
      </Router>
    </>
  );
};

export default BaseRouter;
