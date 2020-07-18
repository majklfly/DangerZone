import React, { useRef, useState } from "react";
import { Carousel, Button, Spin } from "antd";
import { connect } from "react-redux";

import "./Quiz.css";
import { FinalQuizAnimationFailed } from "../FinalQuizAnimationFailed/FinalQuizAnimationFailed";
import { FinalQuizAnimationSuccess } from "../FinalQuizAnimationSuccess/FinalQuizAnimationSuccess";
import { postTestResults } from "../../store/actions/quiz";

const Quiz = (props) => {
  const [questionIndex, setQuestionIndex] = useState(1);
  let ref = useRef();
  let isCompletedRef = useRef(false);
  let valCountRef = useRef(null);

  const valuateAnswer = (answerIsCorrect) => {
    setQuestionIndex((questionIndex) => questionIndex + 1);
    if (answerIsCorrect === true) {
      valCountRef.current = valCountRef.current + 1;
    }
    if (valCountRef.current > 4) {
      isCompletedRef.current = true;
    }
    if (questionIndex === 5) {
      postTestResults(
        valCountRef.current,
        isCompletedRef.current,
        props.user,
        props.chapterId,
        props.userDataId
      );
    }
  };

  if (props.questions === undefined) {
    return <Spin size="large" className="spinner" />;
  }
  return (
    <>
      <div>
        <Carousel
          ref={ref}
          className="carouselQuiz"
          data-test="carouselQuiz"
          dots={false}
        >
          {props.questions.questions.map((question, index) => {
            return (
              <div className="question-container" key={index}>
                <h1 className="question-label" data-test="question-label">
                  {question.label}
                </h1>
                <div className="question-buttons-container">
                  {question.answers.map((answer) => {
                    return question.id === answer.question ? (
                      <Button
                        className="answer-buttons"
                        data-test="answer-buttons"
                        key={answer.id}
                        onClick={() => {
                          valuateAnswer(answer.is_correct);
                          setTimeout(() => ref.current.next(), 150);
                        }}
                      >
                        {answer.text}
                      </Button>
                    ) : null;
                  })}
                </div>
              </div>
            );
          })}
        </Carousel>
        {valCountRef.current === 5 && questionIndex === 6 ? (
          <div>
            <div
              className="quizFailedAnimation"
              data-test="quizFailedAnimation"
            >
              <FinalQuizAnimationSuccess validatedCount={valCountRef.current} />
            </div>
          </div>
        ) : null}
        {valCountRef.current !== 5 && questionIndex === 6 ? (
          <div>
            <div
              className="quizFailedAnimation"
              data-test="quizFailedAnimation"
            >
              <FinalQuizAnimationFailed validatedCount={valCountRef.current} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userDataId: state.userDataReducer.id,
    chapterId: state.chapterReducer.id,
    user: state.userDataReducer.user,
  };
};

export default connect(mapStateToProps)(Quiz);
