import { createStore } from "redux";
import reducer from "../state/reducers/index";

const store = createStore(reducer);
export default store;
