import React, { useState } from "react";
import Timer from "../Timer";
import "./index.css";
import { Link } from "react-router-dom";
import questions from "./questions.json";
import Question from "../Question";
import Options from "../Options";
import ButtonController from "../ButtonController";
import ResutlChart from "../ResutlChart";
const Test = () => {
  const [questionIndex, setQuestionNo] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [allAnswer, setAllAnswer] = useState([]);

  function nextQuestion() {
    setQuestionNo(questionIndex + 1);
    answer === null
      ? setAllAnswer([
          ...allAnswer,
          {
            questionNo: questionIndex + 1,
            question: questions[questionIndex].question,
            correctAnswer: questions[questionIndex].answer,
            answer: "NA",
          },
        ])
      : setAllAnswer([...allAnswer, { ...answer }]);
    setAnswer(null);
  }
  function handleChange(event, questionNo) {
    setAnswer({
      questionNo,
      question: questions[questionIndex].question,
      correctAnswer: questions[questionIndex].answer,
      answer: event.target.value,
    });
  }

  return (
    <div>
      {questions.length === questionIndex ? (
        <ResutlChart allAnswer={allAnswer}></ResutlChart>
      ) : (
        <div className="test">
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
            handleChange={handleChange}
          />
          <ButtonController
            noOfQuestions={questions.length}
            questionIndex={questionIndex}
            nextQuetion={nextQuestion}
          />
        </div>
      )}
    </div>
  );
};

export default Test;
