import * as ActionTypes from "../constants";

const initialState = {
  auth: null,
  errorMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTH:
      return { ...state, auth: action.payload };
    case ActionTypes.RESET_AUTH:
      return { ...state, auth: null };
    default:
      return state;
  }
};

export default authReducer;
