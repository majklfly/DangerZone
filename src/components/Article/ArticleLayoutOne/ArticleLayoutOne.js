import React from "react";
import "./ArticleLayoutOne.css";

export const ArticleLayoutOne = (props) => {
  return (
    <div className="ArticleLayoutOneContainer">
      <h1>{props.data.name}</h1>
      <img src={props.data.image} alt="imageOfSlide" />
      <h4>{props.data.content}</h4>
    </div>
  );
};
