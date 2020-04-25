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

  it("should receive a new state from facebook login", () => {
    const payload = {
      id: 1,
      first_name: "testName",
      last_name: "testSurname",
      email: "testEmail"
    };
    const newState = userDataReducer(undefined, {
      type: types.SET_USER,
      payload: payload
    });
    expect(newState.email).toEqual(payload.email);
    expect(newState.firstName).toEqual(payload.first_name);
    expect(newState.lastName).toEqual(payload.last_name);
    expect(newState.id).toEqual(payload.id);
  });
});
