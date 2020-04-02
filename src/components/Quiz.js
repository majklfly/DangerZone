import React, { useRef, useState, useEffect, useContext } from "react";

import { Carousel, Button, Spin } from "antd";
import server from "../api/server";
import "./Quiz.scss";
import { FinalQuizAnimation } from "./FinalQuizAnimation";

import { Context } from "../context/QuizContext";

const Quiz = props => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [IsCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [AddActiveClass, setAddActiveClass] = useState(false);
  const [userId, setUserId] = useState(0);
  const [chapterId, setChapterId] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(1);
  const [validatedCount, setValidatedCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const { postTestResults } = useContext(Context);

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

  const getUserId = () => {
    server.get("/users/").then(res => {
      res.data.map(item => {
        if (item.username === username) {
          setUserId(item.id);
        }
      });
    });
  };

  const getChapterId = () => {
    server.get("/chapters/").then(res => {
      res.data.map(item => {
        if (item.title === currentChapter) {
          setChapterId(item.id);
        }
      });
    });
  };

  useEffect(() => {
    getQuestions();
    getAnswers();
    getUserId();
    getChapterId();
    // eslint-disable-next-line
  }, []);

  const valuateAnswer = (answerIsCorrect, ValidatedCount) => {
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
    if (questionIndex === 5) {
      postTestResults(
        valCountRef.current,
        isCompletedRef.current,
        userId,
        chapterId
      );
    }
  };

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
          <Carousel ref={ref}>
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
                          valuateAnswer(answer.is_correct, setValidatedCount);
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
            <FinalQuizAnimation
              validatedCount={valCountRef.current}
              questionCount={questionIndex}
            />
          </Carousel>
        </div>
      </>
    );
  }
};

export default Quiz;
