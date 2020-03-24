import React from "react";

import Quiz from "../components/Quiz";

const QuizScreen = () => {
  return (
    <>
      <img alt="background" className="background" />
      <div className="carousel">
        <Quiz quizNumber={1} />
      </div>
    </>
  );
};

export default QuizScreen;
