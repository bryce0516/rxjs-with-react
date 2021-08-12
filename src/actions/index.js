import * as ActionTypes from "../constants";

export const setAuth = (res) => ({
  type: ActionTypes.SET_AUTH,
  payload: res,
});

export const resetAuth = (res) => ({
  type: ActionTypes.RESET_AUTH,
  payload: res,
});

export const loadingStart = () => ({
  type: ActionTypes.LOADING_START,
});

export const loadingEnd = () => ({
  type: ActionTypes.LOADING_END,
});

export const showErrorMessage = (res) => ({
  type: ActionTypes.SHOW_ERROR_MESSAGE,
  payload: res,
});

export const hideErrorMessage = () => ({
  type: ActionTypes.HIDE_ERROR_MESSAGE,
});
