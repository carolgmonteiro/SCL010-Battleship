import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/constants";
import { createReducer } from "../common/util/reducerUtils";

const initialState = {
  data: 2
};

const incrementCounter = state => {
  return { ...state, data: state.data + 1 };
};

const decrementCounter = state => {
  return { ...state, data: state.data - 1 };
};

//manera 1 de hacer la misma funcion
// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
