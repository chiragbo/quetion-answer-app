import React from "react";
import "./index.css";
const Option = ({ questions, questionIndex, handleChange }) => {
  return (
    <div>
      {Object.keys(questions[questionIndex].options).map((option, index) => {
        return (
          <div className="option" key={index}>
            <input
              key={questionIndex}
              type="radio"
              value={questions[questionIndex].options[option]}
              onChange={(event) =>
                handleChange(
                  event,
                  questionIndex + 1,
                  questions[questionIndex].question,
                  questions[questionIndex].answer
                )
              }
            ></input>
            {questions[questionIndex].options[option]}
          </div>
        );
      })}
    </div>
  );
};

export default Option;
