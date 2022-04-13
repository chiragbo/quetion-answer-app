import React from "react";
import "./index.css";
type QuestionProps={
  question:string
}
const Question:React.FC<QuestionProps> = ({ question }) => {
  return <div className="question">{question}</div>;
};

export default Question;
