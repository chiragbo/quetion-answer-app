import React from "react";
import "./index.css";
const Options = ({ questionIndex, handleChange, options }) => {
  return (
    <div>
      {Object.keys(options).map((option, index) => {
        return (
          <div className="option" key={index.toString()}>
            <input
              key={"key_" + (questionIndex + 1)}
              type="radio"
              name={"questionNo_" + (questionIndex + 1)}
              value={option}
              id={option}
              onChange={(event) => handleChange(event, questionIndex + 1)}
            ></input>
            <label htmlFor={option}>{options[option]}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Options;