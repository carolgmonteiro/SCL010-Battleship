//funciona index.js de reducer

import { combineReducers } from "redux";
// import testReducerGame from "../store/initialState";
import initialState from "../store/initialState";

const rootReducer = combineReducers({
  test: initialState
});

export default rootReducer;
