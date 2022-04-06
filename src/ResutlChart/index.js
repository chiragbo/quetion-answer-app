import CanvasJSReact from "../assets/canvasjs.react";
import { Component } from "react";
import { Link } from "react-router-dom";
import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import questions from "../Test/questions.json";
import "./index.css";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const getTotalCorrectAnswers = (answers) => {
  let correctAnswersCount = 0;

  for (const [question, answer] of Object.entries(answers)) {
    if (
      questions.find(({ questionNo }) => questionNo == question).answer ===
      answer
    ) {
      correctAnswersCount++;
    }
  }

  return correctAnswersCount;
};

function ResutlChart() {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate("/result", { state: answers });
  }

  const location = useLocation();
  const answers = location.state;
  const noOfQuestions = Object.keys(questions).length;
  let percentage = 0;
  noOfQuestions === 0
    ? (percentage = 0)
    : (percentage = (getTotalCorrectAnswers(answers) / noOfQuestions) * 100);
  const options = {
    title: {
      text: "Resutl of JavaScript test",
    },
    data: [
      {
        type: "pie",
        click: handleOnClick,
        yValueFormatString: '##0.00"%"',
        dataPoints: [
          { label: "Correct", y: percentage },
          { label: "Wrong", y: 100 - percentage },
        ],
      },
    ],
  };

  return (
    <div className="result-chart">
      <CanvasJSChart options={options} />
    </div>
  );
}
export default ResutlChart;
