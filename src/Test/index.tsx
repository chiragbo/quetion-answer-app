import React, { useState } from "react";
import { confirm } from "react-confirm-box";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
import questions from "./questions.json";
import Question from "./Question";
import Options from "./Options";
import TestTimer from "./TestTimer";
import Timer from "./Timer";
import { Dispatch } from "redux";
interface TestProps {

}
const Test: React.FC<TestProps> = (props:DispatchProps) => {
  const [questionIndex, setQuestionNo] = useState(0);
  const navigate = useNavigate();
  const optionsWithLabelChange = {
    closeOnOverlayClick: false,
    labels: {
      confirmable: "Yes",
      cancellable: "No",
    },
  };
  interface optionsType {
    closeOnOverlayClick: boolean;
    labels: {
      confirmable: string;
      cancellable: string;
    };
  }
  function nextQuestion() {
    setQuestionNo(questionIndex + 1);
  }
  function handleAnswerSelection(
    event: React.ChangeEvent<HTMLInputElement>,
    questionNo: number
  ) {
    props.dispatch({
      type: "ADD_ANSWERS",
      payload: { [questionNo]: event.target.value },
    });
  }
  function showPieChar() {
    navigate("/result-pie");
  }
  const onClick = async (options: optionsType) => {
    const result = await confirm("Do you want to sumit test?", options);
    if (result) {
      showPieChar();
    }
  };

  return (
    <div>
      {questions.length === questionIndex ? (
        <>{showPieChar()}</>
      ) : (
        <div className="test">
          <TestTimer
            initialMinute={10}
            initialSeconds={0}
            showPieChar={showPieChar}
          ></TestTimer>
          <Timer
            initialMinute={1}
            initialSeconds={0}
            nextQuetion={nextQuestion}
            questionNo={questionIndex}
          ></Timer>
          <Question question={questions[questionIndex].question} />
          <Options
            questionIndex={questionIndex}
            options={questions[questionIndex].options}
            handleChange={handleAnswerSelection}
          />
          <div className="test-buttons">
            {questions.length - 1 > questionIndex && (
              <button onClick={() => nextQuestion()}>Next</button>
            )}
            <button
              onClick={() => {
                onClick(optionsWithLabelChange);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
interface DispatchProps {
  dispatch: () => void
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
  };
};
export default connect<DispatchProps>(mapDispatchToProps)(Test);
