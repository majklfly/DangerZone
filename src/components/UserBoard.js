import React from "react";
import { connect } from "react-redux";

import "./UserBoard.scss";

const UserBoard = props => {
  return (
    <>
      <div className="boarddetail">
        <div className="welcome-board">{props.userData}</div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const userData = state.userData;
  return { userData };
};

export default connect(mapStateToProps)(UserBoard);
