import * as ActionTypes from "../constants";

const initialState = {
  loading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING_START:
      return { ...state, loading: true };
    case ActionTypes.LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default loginReducer;
