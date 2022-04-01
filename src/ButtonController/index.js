import React from "react";
import "./index.css";
const ButtonController = ({ questions, questionIndex, nextQuetion }) => {
  return (
    <div className="button-controller-button">
      {questions.length === questionIndex + 1 ? (
        <button onClick={nextQuetion}>Submit</button>
      ) : (
        <button onClick={nextQuetion}>Next</button>
      )}
    </div>
  );
};

export default ButtonController;
