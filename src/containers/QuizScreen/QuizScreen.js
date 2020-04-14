import React, { useEffect } from "react";
import Quiz from "../../components/Quiz/Quiz";
import { connect } from "react-redux";
import { getQuiz } from "../../store/actions/quiz";

const QuizScreen = props => {
  useEffect(() => {
    if (props.getQuiz) {
      props.getQuiz(props.quizId);
    }
    if (props.questions) {
    }
  }, [props]);

  return (
    <>
      <div className="carousel" data-test="carousel">
        <Quiz
          quizId={props.quizId}
          data-test="quizContainer"
          questions={props.questions}
        />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quizId: state.chapterReducer.quiz,
    questions: state.quizReducer.quiz
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuiz: quizId => {
      dispatch(getQuiz(quizId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen);
