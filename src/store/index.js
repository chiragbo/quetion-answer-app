import { createStore } from "redux";
const reducer = (state = {}, action) => {
  if (action.type === "ADD_ANSWERS") {
    return { ...state, ...action.payload };
  }
  return state;
};
const store = createStore(reducer);
export default store;
