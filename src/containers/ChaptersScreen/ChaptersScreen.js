import React from "react";
import Cards from "../../components/Cards/Cards";
import "./ChapterScreen.css";

const ChaptersScreen = () => {
  return (
    <>
      <div className="container-cards" data-test="container-cards">
        <Cards className="cards" data-test="cards" />
      </div>
    </>
  );
};

export default ChaptersScreen;
