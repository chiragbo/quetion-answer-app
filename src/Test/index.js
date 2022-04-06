import React, { useState } from "react";
import Timer from "../Timer";
import "./index.css";
import questions from "./questions.json";
import Question from "../Question";
import Options from "../Options";
import { useNavigate } from "react-router-dom";
import TestTimer from "../TestTimer";
import { confirm } from "react-confirm-box";
const Test = () => {
  const [questionIndex, setQuestionNo] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const optionsWithLabelChange = {
    closeOnOverlayClick: false,
    labels: {
      confirmable: "Yes",
      cancellable: "No",
    },
  };
  function nextQuestion() {
    setQuestionNo(questionIndex + 1);
  }
  function handleAnswerSelection(event, questionNo) {
    setAnswers({
      ...answers,
      [questionNo]: event.target.value,
    });
  }
  function showPieChar() {
    navigate("/result-pie", { state: answers });
  }
  const onClick = async (options) => {
    const result = await confirm("Do you want to sumit test?", options);
    if (result) {
      showPieChar();
    }
  };

  return (
    <div>
      {questions.length === questionIndex ? (
        showPieChar()
      ) : (
        <div className="test">
          <TestTimer
            initialMinute={1}
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

export default Test;
