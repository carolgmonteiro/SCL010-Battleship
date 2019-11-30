import { combineReducers } from "redux";
import testReducerGame from "../store/testReducerGame";

const rootReducer = combineReducers({
  test: testReducerGame
});

export default rootReducer;
