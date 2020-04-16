import { types } from "../../actions/actionTypes";
import userDataReducer from "./userData";

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

describe("UserDataReducer", () => {
  it("should return default state", () => {
    const newState = userDataReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should return new state if receiving type", () => {
    const payload = {
      id: 1,
      email: "test",
      joined: "test",
      username: "test",
      firstName: "test",
      lastName: "test",
      profileId: 1,
      facebook: "test",
      twitter: "test",
      instagram: "test",
      company: "test",
      position: "test",
      country: "test",
      chapterdata: "test",
      user: 1
    };
    const newState = userDataReducer(undefined, {
      type: types.GET_USERDATA,
      payload: payload
    });
    expect(newState).toEqual(payload);
  });
});
