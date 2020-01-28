import React, { useContext } from "react";
import { connect } from "react-redux";

import "./UserBoard.scss";
import QuizContext from "../context/QuizContext";

const UserBoard = props => {
  const { validatedCount } = useContext(QuizContext);

  return (
    <>
      <div className="boarddetail">
        <h4 className="validatedCount">Correct answers: {validatedCount}</h4>
        <p className="welcome">Welcome {props.userData} !</p>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const userData = state.userData;
  return { userData };
};

export default connect(mapStateToProps)(UserBoard);
