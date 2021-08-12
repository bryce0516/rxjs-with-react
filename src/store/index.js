import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "../epics/rootEpic";
import rootReducer from "../reducers/rootReducer";

const epicMiddleware = createEpicMiddleware();
const observableMiddleware = applyMiddleware(epicMiddleware);
const store = createStore(rootReducer, observableMiddleware);

epicMiddleware.run(rootEpic);
export default store;
