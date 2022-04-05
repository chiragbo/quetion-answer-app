import React from "react";
import "./index.css";
const ButtonController = ({ noOfQuestions, questionIndex, nextQuetion }) => {
  return (
    <div className="button-controller-button">
      {noOfQuestions === questionIndex + 1 ? (
        <button onClick={nextQuetion}>Submit</button>
      ) : (
        <button onClick={nextQuetion}>Next</button>
      )}
    </div>
  );
};

export default ButtonController;
