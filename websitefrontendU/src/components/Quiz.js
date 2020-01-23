import React, { useState, useEffect } from "react";

import { Carousel, Button } from "antd";
import server from "../api/server";
import "./Quiz.scss";

function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [validation, setValidation] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);

  const getQuestions = () => {
    server.get("/question/").then(res => {
      setQuestions(res.data);
    });
  };

  const getAnswers = () => {
    server.get("/answer/").then(res => {
      setAnswers(res.data);
    });
  };

  const valuateAnswer = (state, answerIsCorrect, questionIndex) => {
    setIsCorrect(answerIsCorrect);
    answerIsCorrect === true
      ? setValidation("Correct")
      : setValidation("Keep Trying");
    setQuestionIndex(questionIndex + 1);
  };

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
                          onClick={() => {
                            valuateAnswer(
                              isCorrect,
                              answer.is_correct,
                              questionIndex
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
      <div style={validationText}>{validation}</div>
    </>
  );
}

const validationText = {
  fontSize: 30,
  textAlign: "center",
  paddingTop: 10
};

const questionLabel = {
  color: "white"
};

export default Quiz;
