import React, { useState, useEffect, useContext } from "react";

import { Carousel, Button } from "antd";
import server from "../api/server";
import "./Quiz.scss";

import { Context } from "../context/QuizContext";

const Quiz = props => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [userId, setUserId] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [validatedCount, setValidatedCount] = useState(0);
  const [quizId, setQuizId] = useState(0);

  const { postTestResults } = useContext(Context);

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
      let quizId = 0;
      res.data.map(item => {
        return item.id === props.quizNumber ? (quizId = item.id) : null;
      });
      setQuizId(quizId);
    });
  };

  const getQuestions = () => {
    server.get("/question/").then(res => {
      let questions = [];
      res.data.map(item => {
        return item.quiz === props.quizNumber ? questions.push(item) : null;
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
    valuateQuiz()
  };

  const valuateQuiz = () => {
    if (questionIndex === (questions.length - 1)) {
      setIsCompleted(true);
      postTestResults(validatedCount,isCompleted,userId,quizId)
    } else {
      setIsCompleted(false);
    }
  };

  // console.log('postTestResults: '+ validatedCount + " " + isCompleted + " " + userId + ' ' + quizId)
  // prettier-ignore
  useEffect(() => {
    getQuiz();
    getQuestions();
    getAnswers();
  }, []);

  return (
    <>
      <Carousel className="container-carousel">
        {questions
          .filter(question => question.id > questionIndex)
          .map((question, index) => {
            return (
              <div className="question" key={index}>
                <h1 style={questionLabel}>{question.label}</h1>
                {answers.map(answer => (
                  <div className="answer-buttons" key={answer.id}>
                    {question.id === answer.question ? (
                      <div key={answer.id}>
                        <Button
                          key={answer.id}
                          onClick={() => {
                            valuateAnswer(
                              answer.is_correct,
                              question.id,
                              setValidatedCount
                            );
                          }}
                        >
                          {answer.text}
                        </Button>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            );
          })}
      </Carousel>
      <div style={validationText}></div>
    </>
  );
};

const validationText = {
  fontSize: 30,
  textAlign: "center",
  paddingTop: 10
};

const questionLabel = {
  color: "white"
};

export default Quiz;
