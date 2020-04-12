import React, { useEffect } from "react";
import { Button } from "antd";

import Article from "../../components/Article/Article";
import "./ArticlesScreen.scss";

import server from "../../api/server";
import { connect } from "react-redux";
import { getChapter } from "../../store/actions/chapter";

const token = localStorage.getItem("token");
const currentChapterId = localStorage.getItem("currentChapterId");

console.log("currentChapter", currentChapterId);

const ArticlesScreen = props => {
  useEffect(() => {
    props.getChapter(currentChapterId);
  }, []);

  return (
    <>
      <div className="carousel" data-test="ArticlesScreenContainer">
        <Article data-test="articles" />
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

const mapStatetoProps = state => {
  console.log("state", state);
  return {
    chapterData: state.chapterReducer
  };
};

export default connect(
  mapStatetoProps,
  { getChapter }
)(ArticlesScreen);
