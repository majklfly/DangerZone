import React, { useState, useEffect, useContext } from "react";

import { Carousel, Button } from "antd";
import server from "../api/server";
import "./Quiz.scss";

import QuizContext from "../context/QuizContext";

const Quiz = props => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const { validatedCount, addValidatedCount } = useContext(QuizContext);

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

  const valuateAnswer = (answerIsCorrect, questionIndex, addValidatedCount) => {
    if (answerIsCorrect === true) {
      console.log("is correct");
      addValidatedCount()
    }
    setQuestionIndex(questionIndex);
  };

  console.log("Question Index: " + questionIndex);

  useEffect(() => {
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
                          onClick={() => {valuateAnswer(
                            answer.is_correct,
                            question.id,
                            addValidatedCount
                          )}}
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
