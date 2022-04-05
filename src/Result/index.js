import React from "react";
import { useState, useEffect } from "react";
import questions from "../Test//questions.json";

import { useLocation } from "react-router";
import "./index.css";
const Resutl = () => {
  const [resutl, setResult] = useState([]);
  const location = useLocation();
  const allAnswer = location.state;
  function getResult(qNo, ans) {
    let isCorrect = questions.find((question) => {
      if (question.questionNo === qNo && question.answer === ans) {
        return true;
      } else {
        return false;
      }
    });
    return isCorrect === undefined ? false : true;
  }
  //getResult();
  useEffect(() => {
    let result = allAnswer.map(
      ({ questionNo, question, correctAnswer, answer }) => {
        return {
          questionNo,
          question,
          correctAnswer,
          answer,
          isCorrect: getResult(questionNo, answer),
        };
      }
    );
    console.log(result);
    setResult(result);
  }, []);

  return (
    <div>
      <h2>Result for JavaScript Test</h2>
      <table className="result-table">
        <tbody>
          <tr>
            <th>Question </th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
          {resutl.map(
            (
              { questionNo, question, correctAnswer, answer, isCorrect },
              index
            ) => {
              return (
                <tr key={index.toString()}>
                  <td>{question}</td>
                  <td style={isCorrect ? { color: "black" } : { color: "red" }}>
                    {answer === "NA"
                      ? "Not Attended"
                      : questions[index].options[answer]}
                  </td>
                  <td>{questions[index].options[correctAnswer]}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Resutl;
