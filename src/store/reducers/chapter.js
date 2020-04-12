import { updatedObject } from "../utility";

import { types } from "../actions/actionTypes";

const initialState = {
  id: 0,
  quiz: 0,
  articles: [],
  title: " ",
  description: " ",
  chapters: []
};

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CHAPTER:
      return updatedObject(state, {
        id: action.payload.id,
        quiz: action.payload.quiz,
        articles: action.payload.articles,
        title: action.payload.title,
        description: action.payload.description
      });
    case types.GET_CHAPTERS:
      return updatedObject(state, {
        chapters: action.payload
      });
    default:
      return state;
  }
};

export default chapterReducer;
