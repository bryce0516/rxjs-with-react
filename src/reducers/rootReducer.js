import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  authState: authReducer,
  loginState: loginReducer,
  messageState: messageReducer,
});

export default rootReducer;
