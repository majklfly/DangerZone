import React from "react";
import { Button } from "antd";

import Article from "../../components/Article/Article";
import "./ArticlesScreen.css";

import { connect } from "react-redux";

const ArticlesScreen = (props) => {
  return (
    <>
      <div
        className="ArticlesScreenContainer"
        data-test="ArticlesScreenContainer"
      >
        <Article data-test="articles" articles={props.articles} />
      </div>
      <Button
        data-test="ArticlesScreenButton"
        type="primary"
        size="large"
        className="testMeButton"
        onClick={() => props.history.push("/chapter/quiz/")}
      >
        Test me!
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.chapterReducer.articles,
  };
};

export default connect(mapStateToProps)(ArticlesScreen);
