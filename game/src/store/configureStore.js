import { createStore } from "redux";
// import testReducerGame from "./testReducerGame";
import rootReducer from "../reducers/rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export const configureStore = () => {
  const store = createStore(rootReducer, devToolsEnhancer());
  return store;
};
