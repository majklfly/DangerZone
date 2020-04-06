import React, { useRef, useState, useEffect, useContext } from "react";

import { Carousel, Button, Spin } from "antd";
import server from "../api/server";
import "./Quiz.css";
import { FinalQuizAnimationFailed } from "./FinalQuizAnimationFailed";
import { FinalQuizAnimationSuccess } from "./FinalQuizAnimationSuccess";
import { useSelector } from "react-redux";

import { Context } from "../context/QuizContext";

const Quiz = props => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [IsCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [AddActiveClass, setAddActiveClass] = useState(false);
  const [userId, setUserId] = useState(0);
  const [chapterId, setChapterId] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(1);

  const userData = useSelector(state => state.userDataReducer);

  let ref = useRef();
  let isCompletedRef = useRef(false);
  let valCountRef = useRef(null);

  const currentChapter = localStorage.getItem("currentChapter");
  const username = localStorage.getItem("username");

  const getQuestions = () => {
    server.get("/question/").then(res => {
      let questionsLocal = [];
      res.data.map(item => {
        return item.chapterTitle === currentChapter
          ? questionsLocal.push(item)
          : null;
      });
      setQuestions(questionsLocal);
    });
  };

  const getAnswers = () => {
    server.get("/answer/").then(res => {
      let answersLocal = [];
      res.data.map(item => {
        return item.chapterTitle === currentChapter
          ? answersLocal.push(item)
          : null;
      });
      setAnswers(answersLocal);
    });
  };

  const getChapterId = () => {
    server.get("/chapters/").then(res => {
      res.data.map(item => {
        return item.title === currentChapter ? setChapterId(item.id) : null;
      });
    });
  };

  useEffect(() => {
    getQuestions();
    getAnswers();
    getChapterId();
    // eslint-disable-next-line
  }, []);

  const valuateAnswer = answerIsCorrect => {
    setQuestionIndex(questionIndex => questionIndex + 1);
    if (answerIsCorrect === true) {
      valCountRef.current = valCountRef.current + 1;
    }
    if (valCountRef.current > 3) {
      isCompletedRef.current = true;
    }
    valuateQuiz();
  };

  const valuateQuiz = () => {
    const postTestResults = (
      correct_answers,
      is_Completed,
      userId,
      chapterId,
      userDataId
    ) => {
      console.log("is_Completed", is_Completed);
      console.log("correct_answers", correct_answers);
      console.log("userId", userId);
      console.log("userDataId", userDataId);
      console.log("chapterId", chapterId);
      server
        .post("/chapterdata/", {
          completed: is_Completed,
          correct_answers: correct_answers,
          user: userId,
          userData: userDataId,
          chapter: chapterId
        })
        .then(res => {
          console.log(res);
        });
    };

    if (questionIndex === 5) {
      postTestResults(
        valCountRef.current,
        isCompletedRef.current,
        userData.id,
        chapterId,
        userData.id
      );
    }
  };

  console.log("valCountRef", valCountRef.current);
  console.log("questionIndex", questionIndex);

  if (questions === undefined || questions.length === 0) {
    return (
      <div className="spinner">
        <Spin size="large" />;
      </div>
    );
  } else {
    return (
      <>
        <div>
          <Carousel ref={ref} className="carouselQuiz">
            {questions.map((question, index) => {
              return question.chapterTitle === currentChapter ? (
                <div key={index}>
                  <h1 className="question-label">{question.label}</h1>
                  {answers.map((answer, index) => {
                    return answer.question === question.id ? (
                      <Button
                        className="answer-buttons"
                        key={answer.id}
                        onClick={() => {
                          valuateAnswer(answer.is_correct);
                          setIsCorrectAnswer(answer.is_correct);
                          setAddActiveClass(true);
                          setTimeout(() => setAddActiveClass(false), 2600);
                          setTimeout(() => ref.current.next(), 2600);
                        }}
                      >
                        {answer.text}
                      </Button>
                    ) : null;
                  })}
                  <div>
                    {AddActiveClass ? (
                      <div className="container-indicator">
                        <div className="loader">
                          <div
                            className={
                              IsCorrectAnswer ? "box-correct" : "box-incorrect"
                            }
                          ></div>
                          <div className="hill"></div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null;
            })}
          </Carousel>
          {valCountRef.current === 5 && questionIndex === 6 ? (
            <div>
              <div className="quizFailedAnimation">
                <FinalQuizAnimationSuccess
                  validatedCount={valCountRef.current}
                />
              </div>
            </div>
          ) : null}
          {valCountRef.current !== 5 && questionIndex === 6 ? (
            <div>
              <div className="quizFailedAnimation">
                <FinalQuizAnimationFailed
                  validatedCount={valCountRef.current}
                />
              </div>
            </div>
          ) : null}
        </div>
      </>
    );
  }
};
export default Quiz;
