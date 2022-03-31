import { combineReducers } from "redux";
import QuestionReducer from "./QuestionReduce";
const reducer = combineReducers({
  question: QuestionReducer,
});
export default reducer;
