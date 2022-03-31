import React, { useState } from "react";
import Timer from "../Timer";
import Resutl from "../Result";
import { useSelector } from "react-redux";
import "./index.css";
const Test = () => {
  const [questionIndex, setQuestionNo] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [allAnswer, setallAnswer] = useState([]);
  const questions = useSelector((state) => state.question);

  function nextQuetion() {
    setQuestionNo(questionIndex + 1);
    setallAnswer([...allAnswer, { ...answer }]);
    console.log(allAnswer);
  }
  function handleChange(event, questionNo) {
    setAnswer({ questionNo, answer: event.target.value });
    console.log(answer);
  }
  return (
    <div>
      {questions.length === questionIndex ? (
        <div>
          <Resutl />
        </div>
      ) : (
        <>
          <Timer
            initialMinute={1}
            initialSeconds={0}
            nextQuetion={nextQuetion}
            questionNo={questionIndex}
          ></Timer>
          <div>
            <div>{questions[questionIndex].question}</div>
            <div>
              {questions[questionIndex].options.map((option) => {
                return (
                  <div className="test-option">
                    <input
                      key={questionIndex}
                      type="radio"
                      name={questionIndex}
                      value={option}
                      onChange={(event) =>
                        handleChange(event, questionIndex + 1)
                      }
                    ></input>
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            {questions.length === questionIndex + 1 ? (
              <button onClick={nextQuetion}>Submit</button>
            ) : (
              <button onClick={nextQuetion}>Next</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Test;
