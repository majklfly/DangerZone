import React from "react";

import Quiz from "../../components/Quiz";

const QuizScreen = () => {
  return (
    <>
      <div className="carousel" data-test="carousel">
        <Quiz quizNumber={1} data-test="quizContainer" />
      </div>
    </>
  );
};

export default QuizScreen;
