import CanvasJSReact from "../assets/canvasjs.react";
import { Component } from "react";
import { Link } from "react-router-dom";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const getNoOfCorectAnswer = (allAnswer) => {
  let noOfCorectAnswer = 0;
  allAnswer.forEach((answer) => {
    if (answer.answer === answer.correctAnswer) noOfCorectAnswer++;
  });

  return noOfCorectAnswer;
};

function ResutlChart(props) {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate("/result", { state: allAnswer });
  }

  const allAnswer = props.allAnswer;
  const noOfQuestions = allAnswer.length;
  const percentage = (getNoOfCorectAnswer(allAnswer) / noOfQuestions) * 100;
  console.log("percentage", percentage);
  const options = {
    title: {
      text: "Resutl of javaScript test",
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
    <div>
      <CanvasJSChart
        options={options}
        /* onRef = {ref => this.chart = ref} */
      />
    </div>
  );
}
export default ResutlChart;
