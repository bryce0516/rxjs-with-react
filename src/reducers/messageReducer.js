import * as ActionTypes from "../constants";

const initialState = {
  errorMessage: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case ActionTypes.HIDE_ERROR_MESSAGE:
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

export default messageReducer;
