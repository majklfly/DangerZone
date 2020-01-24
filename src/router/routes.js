import React from "react";
import { Route } from "react-router-dom";

import * as actions from "../store/actions/auth";

import AccountScreen from "../containers/AccountScreen";
import HomepageScreen from "../containers/HomepageScreen";
import LectureScreen from "../containers/LectureScreen";
import QuizScreen from "../containers/QuizScreen";

import ChapterOneScreen from "../containers/Lectures/ChapterOneScreen";

import ResponsiveNavigation from "../containers/Layout/Layout";

const BaseRouter = () => {
  const logout = () => {
    actions.logout();
    window.location.reload();
  };

  const navLinks = [
    {
      text: "Account",
      path: "/account/",
      icon: "icon ion-md-contact"
    },
    {
      text: "Homepage",
      path: "/homepage/",
      icon: "icon ion-md-home"
    },
    {
      text: "Lecture",
      path: "/lecture/",
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
      <ResponsiveNavigation navLinks={navLinks} />
      <div>
        <Route exact path="/homepage/" component={HomepageScreen} />
        <Route exact path="/account/" component={AccountScreen} />
        <Route exact path="/lecture/" component={LectureScreen} />
        <Route exact path="/chapterone/" component={ChapterOneScreen} />
        <Route exact path="/chapterone/quiz/" component={QuizScreen} />
      </div>
    </>
  );
};

export default BaseRouter;
