import React from "react";
import "./ArticleLayoutFour.css";

export const ArticleLayoutFour = (props) => {
  return (
    <div className="ArticleLayoutFourContainer">
      <h1>{props.data.name}</h1>
      <h4>{props.data.content}</h4>
      <img
        src={props.data.image}
        alt="ArticleLayoutFourImage"
        className="ArticleLayoutFourImage"
      />
    </div>
  );
};
