import CanvasJSReact from "../assets/canvasjs.react";
import React from "react";
import { useNavigate } from "react-router-dom";
import questions from "../Test/questions.json";
import { connect } from "react-redux";
import "./index.css";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const getTotalCorrectAnswers = (answers: number) => {
  let correctAnswersCount = 0;

  for (const [question, answer] of Object.entries(answers)) {
    if (
      questions.find(({ questionNo }) => questionNo.toString() === question)
        .answer === answer
    ) {
      correctAnswersCount++;
    }
  }

  return correctAnswersCount;
};

function ResutlChart(props) {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate("/result");
  }

  const answers = props.state;
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
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps)(ResutlChart);
