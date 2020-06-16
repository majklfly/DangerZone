import { types } from "../../actions/actionTypes";
import { updatedObject } from "../../utility";

const initialState = {
  token: null,
  error: null,
  loading: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_START:
      return authStart(state, action);
    case types.AUTH_SUCCESS:
      return AuthSuccess(state, action);
    case types.AUTH_FAIL:
      return AuthFail(state, action);
    case types.AUTH_LOGOUT:
      return AuthLogout(state, action);
    default:
      return state;
  }
};

const authStart = (state, action) => {
  return updatedObject(state, {
    error: null,
    loading: true
  });
};

const AuthSuccess = (state, action) => {
  return updatedObject(state, {
    token: action.token,
    error: null,
    loading: false,
    userId: action.userId
  });
};

const AuthFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const AuthLogout = (state, action) => {
  return updatedObject(state, {
    token: null
  });
};

export default AuthReducer;
