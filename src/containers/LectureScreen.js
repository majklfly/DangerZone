import React from "react";
import Cards from "../components/Cards";
import "./LectureScreen.scss";

class LectureScreen extends React.Component {
  render() {
    return (
      <div className="container-cards">
        <Cards className="cards" />
      </div>
    );
  }
}

export default LectureScreen;
