import React from "react";
import "./ArticleLayoutThree.css";

export const ArticleLayoutThree = (props) => {
  return (
    <div className="ArticleLayoutTwoContainer">
      <h1>{props.data.name}</h1>
      <h3 className="ArticleLayoutTwoContent">{props.data.content}</h3>
      <div className="ArticleLayoutTwoContentContainer">
        <div className="ArticleLayoutTwoLeft">
          <h3>{props.data.line1 !== null ? props.data.line1 : null}</h3>
          <h3>{props.data.line2 !== null ? props.data.line2 : null}</h3>
          <h3>{props.data.line3 !== null ? props.data.line3 : null}</h3>
          <h3>{props.data.line4 !== null ? props.data.line4 : null}</h3>
          <h3>{props.data.line5 !== null ? props.data.line5 : null}</h3>
        </div>
        <div className="ArticleLayoutTwoRight">
          <h3>{props.data.line6 !== null ? props.data.line6 : null}</h3>
          <h3>{props.data.line7 !== null ? props.data.line7 : null}</h3>
          <h3>{props.data.line8 !== null ? props.data.line8 : null}</h3>
          <h3>{props.data.line9 !== null ? props.data.line9 : null}</h3>
          <h3>{props.data.line10 !== null ? props.data.line10 : null}</h3>
        </div>
      </div>
      <img
        src={props.data.image}
        alt="ArticleLayoutThreeImage"
        className="ArticleLayoutThreeImage"
      />
    </div>
  );
};
