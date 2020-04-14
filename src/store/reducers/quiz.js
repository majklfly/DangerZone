import { updatedObject } from "../utility";

import { types } from "../actions/actionTypes";

const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_QUIZ:
      return updatedObject(state, {
        quiz: action.payload
      });
    default:
      return state;
  }
};

export default quizReducer;
