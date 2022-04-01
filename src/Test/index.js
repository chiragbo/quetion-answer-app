import React, { useState } from "react";
import Timer from "../Timer";
import { useSelector } from "react-redux";
import "./index.css";
import { Link } from "react-router-dom";
import Question from "../Question";
import Option from "../Option";
import ButtonController from "../ButtonController";
const Test = () => {
  const [questionIndex, setQuestionNo] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [allAnswer, setAllAnswer] = useState([]);
  const questions = useSelector((state) => state.question);

  function nextQuetion() {
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
  function handleChange(event, questionNo, question, correctAnswer) {
    setAnswer({
      questionNo,
      question,
      correctAnswer,
      answer: getAnswerKey(event.target.value),
    });
    console.log(answer);
  }
  function getAnswerKey(ans) {
    return Object.keys(questions[questionIndex].options).find(
      (key) => questions[questionIndex].options[key] === ans
    );
  }
  return (
    <div>
      {questions.length === questionIndex ? (
        <Link to="/result" state={allAnswer}>
          <button className="result-button">View Result</button>
        </Link>
      ) : (
        <div className="test">
          <Timer
            initialMinute={1}
            initialSeconds={0}
            nextQuetion={nextQuetion}
            questionNo={questionIndex}
          ></Timer>
          <Question question={questions[questionIndex].question} />
          <Option
            questions={questions}
            questionIndex={questionIndex}
            handleChange={handleChange}
          />
          <ButtonController
            questions={questions}
            questionIndex={questionIndex}
            nextQuetion={nextQuetion}
          />
        </div>
      )}
    </div>
  );
};

export default Test;
