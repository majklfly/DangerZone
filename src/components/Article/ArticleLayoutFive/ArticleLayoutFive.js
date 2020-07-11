import React from "react";
import "./ArticleLayoutFive.css";

export const ArticleLayoutFive = (props) => {
  return (
    <div className="ArticleLayoutFiveContainer">
      <h1>{props.data.name}</h1>
      <h4>{props.data.content}</h4>
      <div className="ArticleLayoutTwoLeft">
        <h3>{props.data.line1 !== null ? props.data.line1 : null}</h3>
        <h3>{props.data.line2 !== null ? props.data.line2 : null}</h3>
        <h3>{props.data.line3 !== null ? props.data.line3 : null}</h3>
        <h3>{props.data.line4 !== null ? props.data.line4 : null}</h3>
        <h3>{props.data.line5 !== null ? props.data.line5 : null}</h3>
      </div>
      <img
        src={props.data.image}
        alt="ArticleLayoutFiveImage"
        className="ArticleLayoutFiveImage"
      />
    </div>
  );
};
