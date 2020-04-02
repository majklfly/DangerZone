import React from "react";
import Cards from "../components/Cards";
import "./ChapterScreen.scss";

const ChaptersScreen = () => {
  return (
    <>
      <div className="container-cards">
        <Cards className="cards" />
      </div>
    </>
  );
};

export default ChaptersScreen;
