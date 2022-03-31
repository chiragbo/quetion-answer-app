import "./App.css";
import { QuestionAndAnswer } from "./QuestionAnswerApp";
import { Provider } from "react-redux";
import store from "./state/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QuestionAndAnswer />
      </Provider>
    </div>
  );
}

export default App;
