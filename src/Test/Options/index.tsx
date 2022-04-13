import React from "react";
import "./index.css";
interface OptionsProps {
  questionIndex: number;
  options: { a: string; b: string; c: string; d: string };
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    questionIndex: number
  ) => void;
}
const Options: React.FC<OptionsProps> = ({
  questionIndex,
  options,
  handleChange,
}) => {
  return (
    <div>
      {Object.keys(options).map((option:string, index:number ) => {
        return (
          <div className="options" key={index.toString()}>
            <input
              key={"key_" + (questionIndex + 1)}
              type="radio"
              name={"questionNo_" + (questionIndex + 1)}
              value={option}
              id={option}
              onChange={(event) => handleChange(event, questionIndex + 1)}
            ></input>
            <label htmlFor={option}>{options['a']}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Options;
