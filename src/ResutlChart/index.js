import CanvasJSReact from "../assets/canvasjs.react";
import { Component } from "react";
import { Link } from "react-router-dom";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const getNoOfCorectAnswer = (allAnswer) => {
  let noOfCorectAnswer = 0;
  allAnswer.forEach((answer) => {
    if (answer.answer === answer.correctAnswer) noOfCorectAnswer++;
  });

  return noOfCorectAnswer;
};
function loadResult() {
  console.log("fff");
}
export default class ResutlChart extends Component {
  render() {
    const allAnswer = this.props.allAnswer;
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
          click: loadResult,
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
        <Link to="/result" state={allAnswer} onClick={console.log("here")}>
          Here
        </Link>
        <CanvasJSChart
          options={options}
          /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}
