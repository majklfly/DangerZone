import { updatedObject } from "../utility";

const initialState = {
  id: 0,
  quiz: 0,
  articles: [],
  title: " ",
  description: " "
};

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHAPTER":
      return updatedObject(state, {
        id: action.payload.id,
        quiz: action.payload.quiz,
        articles: action.payload.articles,
        title: action.payload.title,
        description: action.payload.description
      });
    default:
      return state;
  }
};

export default chapterReducer;
