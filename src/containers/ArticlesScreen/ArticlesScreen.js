import React from "react";
import { Button } from "antd";

import Article from "../../components/Article/Article";
import "./ArticlesScreen.scss";

import { connect } from "react-redux";

const ArticlesScreen = props => {
  return (
    <>
      <div className="carousel" data-test="ArticlesScreenContainer">
        <Article data-test="articles" articles={props.articles} />
        <Button
          data-test="ArticlesScreenButton"
          type="primary"
          size="large"
          style={buttonStyle}
          onClick={() => props.history.push("/chapters/quiz/")}
        >
          Test me!
        </Button>
      </div>
    </>
  );
};

const buttonStyle = {
  width: "100%",
  background: "#FF7110",
  border: "#FF7110",
  marginTop: "10px"
};

const mapStateToProps = state => {
  return {
    articles: state.chapterReducer.articles
  };
};

export default connect(mapStateToProps)(ArticlesScreen);
