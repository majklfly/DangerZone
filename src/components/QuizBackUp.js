import React, { useRef, useState, useEffect, useContext } from "react";

import { Carousel, Button } from "antd";
import server from "../api/server";
import "./Quiz.scss";
import car from "../assets/car_animation/car2.png";
import wheel from "../assets/car_animation/wheel.png";

import { Context } from "../context/QuizContext";
import { ChaptersContext } from "../context/ChaptersContext";

const Quiz = props => {
  const [questions, setQuestions] = useState([]);
  const [userId, setUserId] = useState(0);
  const [quizId, setQuizId] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [IsCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [AddActiveClass, setAddActiveClass] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [validatedCount, setValidatedCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const { postTestResults } = useContext(Context);
  const { currentChapter } = useContext(ChaptersContext);

  const ref = useRef();

  useEffect(() => {
    getQuiz();
    getQuestions();
    getAnswers();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const getUserId = () => {
    const username = localStorage.getItem("username");
    server.get("/users/").then(res => {
      let userId = 0;
      res.data.map(item => {
        return item.username === username ? (userId = item.id) : null;
      });
      setUserId(userId);
    });
  };
  getUserId();

  const getQuiz = () => {
    server.get("/quiz/").then(res => {
      res.data.map(item => {
        return (item.id = currentChapter ? setQuizId(currentChapter) : null);
      });
    });
  };
  //

  console.log("Quiz id is: " + quizId);
  console.log("currentchapter is: " + currentChapter);

  const getQuestions = () => {
    server.get("/question/").then(res => {
      let questions = [];
      res.data.map(item => {
        return item.quiz === currentChapter ? questions.push(item) : null;
      });
      setQuestions(questions);
    });
  };

  const getAnswers = () => {
    server.get("/answer/").then(res => {
      setAnswers(res.data);
    });
  };

  const valuateAnswer = (answerIsCorrect, questionIndex, setValidatedCount) => {
    setQuestionIndex(questionIndex);
    if (answerIsCorrect === true) {
      setValidatedCount(validatedCount + 1);
    }
    valuateQuiz();
  };

  const valuateQuiz = () => {
    if (questionIndex === 2) {
      setIsCompleted(true);
      postTestResults(validatedCount, isCompleted, userId, quizId);
    } else {
      setIsCompleted(false);
    }
  };

  // console.log(
  //   "postTestResults: " +
  //     validatedCount +
  //     " " +
  //     isCompleted +
  //     " " +
  //     userId +
  //     " " +
  //     quizId
  // );

  return (
    <Carousel ref={ref} dots={false}>
      <div className="container-carousel">
        {questions
          .filter(question => question.quiz === currentChapter)
          .map((question, index) => {
            return (
              <div key={index}>
                <h1 className="question-label">{question.label}</h1>
              </div>
            );
          })}
        <div className="container-answers">
          {answers
            .filter(answer => answer.question === 5)
            .map((answer, index) => {
              return (
                <Button
                  className="answer-buttons"
                  key={answer.id}
                  onClick={() => {
                    valuateAnswer(
                      answer.is_correct,
                      answer.question,
                      setValidatedCount
                    );
                    setIsCorrectAnswer(answer.is_correct);
                    setAddActiveClass(true);
                    setTimeout(() => setAddActiveClass(false), 2600);
                    setTimeout(() => ref.current.next(), 2600);
                  }}
                >
                  {answer.text}
                </Button>
              );
            })}
        </div>
        {AddActiveClass ? (
          <div className="container-indicator">
            <div className="loader">
              <div
                className={IsCorrectAnswer ? "box-correct" : "box-incorrect"}
              ></div>
              <div className="hill"></div>
            </div>
          </div>
        ) : null}
      </div>
      <div>
        {questions
          .filter(question => question.id === 2)
          .map((question, index) => {
            return (
              <div key={index}>
                <h1 className="question-label">{question.label}</h1>
              </div>
            );
          })}
        <div className="container-answers">
          {answers
            .filter(answer => answer.question === 2)
            .map((answer, index) => {
              return (
                <Button
                  className="answer-buttons"
                  key={answer.id}
                  onClick={() => {
                    valuateAnswer(
                      answer.is_correct,
                      answer.question,
                      setValidatedCount
                    );
                    setIsCorrectAnswer(answer.is_correct);
                    setAddActiveClass(true);
                    setTimeout(() => setAddActiveClass(false), 2600);
                    setTimeout(() => ref.current.next(), 2600);
                  }}
                >
                  {answer.text}
                </Button>
              );
            })}
        </div>
        {AddActiveClass ? (
          <div className="container-indicator">
            <div className="loader">
              <div
                className={IsCorrectAnswer ? "box-correct" : "box-incorrect"}
              ></div>
              <div className="hill"></div>
            </div>
          </div>
        ) : null}
      </div>

      <div>
        {questions
          .filter(question => question.id === 3)
          .map((question, index) => {
            return (
              <div key={index}>
                <h1 className="question-label">{question.label}</h1>
              </div>
            );
          })}
        <div className="container-answers">
          {answers
            .filter(answer => answer.question === 3)
            .map((answer, index) => {
              return (
                <Button
                  className="answer-buttons"
                  key={answer.id}
                  onClick={() => {
                    valuateAnswer(
                      answer.is_correct,
                      answer.question,
                      setValidatedCount
                    );
                    setIsCorrectAnswer(answer.is_correct);
                    setAddActiveClass(true);
                    setTimeout(() => setAddActiveClass(false), 2600);
                    setTimeout(() => ref.current.next(), 2600);
                  }}
                >
                  {answer.text}
                </Button>
              );
            })}
        </div>
        {AddActiveClass ? (
          <div className="container-indicator">
            <div className="loader">
              <div
                className={IsCorrectAnswer ? "box-correct" : "box-incorrect"}
              ></div>
              <div className="hill"></div>
            </div>
          </div>
        ) : null}
      </div>

      <div>
        {questions
          .filter(question => question.id === 4)
          .map((question, index) => {
            return (
              <div key={index}>
                <h1 className="question-label">{question.label}</h1>
              </div>
            );
          })}
        <div className="container-answers">
          {answers
            .filter(answer => answer.question === 4)
            .map((answer, index) => {
              return (
                <Button
                  className="answer-buttons"
                  key={answer.id}
                  onClick={() => {
                    valuateAnswer(
                      answer.is_correct,
                      answer.question,
                      setValidatedCount
                    );
                    setIsCorrectAnswer(answer.is_correct);
                    setAddActiveClass(true);
                    setTimeout(() => setAddActiveClass(false), 2600);
                    setTimeout(() => ref.current.next(), 2600);
                  }}
                >
                  {answer.text}
                </Button>
              );
            })}
        </div>
        {AddActiveClass ? (
          <div className="container-indicator">
            <div className="loader">
              <div
                className={IsCorrectAnswer ? "box-correct" : "box-incorrect"}
              ></div>
              <div className="hill"></div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="hero">
        <h2 className="results">Corrects answers: {validatedCount}</h2>
        <div className="highway"></div>
        <div className="city"></div>
        <div className="car">
          <img alt="car" src={car} />
        </div>
        <div className="wheel">
          <img alt="rightwheel" src={wheel} className="back-wheel" />
          <img alt="leftwheel" src={wheel} className="front-wheel" />
        </div>
      </div>
    </Carousel>
  );
};

export default Quiz;
