import { updatedObject } from "../../utility";
import { types } from "../../actions/actionTypes";

const initialState = {
  id: 0,
  email: " ",
  joined: " ",
  username: " ",
  firstName: " ",
  lastName: " ",
  profileId: 0,
  facebook: " ",
  twitter: " ",
  instagram: " ",
  company: " ",
  position: " ",
  country: " ",
  chapterdata: [],
  user: 0
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERDATA:
      return updatedObject(state, {
        id: action.payload.id,
        email: action.payload.email,
        joined: action.payload.joined,
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        profileId: action.payload.profileId,
        facebook: action.payload.facebook,
        twitter: action.payload.twitter,
        instagram: action.payload.instagram,
        company: action.payload.company,
        position: action.payload.position,
        country: action.payload.country,
        chapterdata: action.payload.chapterdata,
        user: action.payload.user
      });
    case types.SET_USER:
      return updatedObject(state, {
        id: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email
      });
    default:
      return state;
  }
};

export default userDataReducer;
