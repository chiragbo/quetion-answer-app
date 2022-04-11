import React from "react";
import questions from "../Test/questions.json";
import "./index.css";
import { connect } from "react-redux";
type MyProps = {
  state:string;
}
interface Options
{
  a:string,
  b:string,
  c:string,
  d:string
}
class Resutl extends React.Component<MyProps> {
  render() {
    const answers = this.props.state;
    return (
      <div className="resutl">
        <h2>Result for JavaScript Test</h2>
        <table className="result-table">
          <tbody>
            <tr>
              <th>Question </th>
              <th>Your Answer</th>
              <th>Correct Answer</th>
            </tr>
            {questions.map(
              ({ questionNo, question, options:Options, answer }, index) => {
                return (
                  //
                  <tr key={index.toString()}>
                    <td>{question}</td>
                    <td
                      style={
                        answers[questionNo] === answer
                          ? { color: "black" }
                          : { color: "red" }
                      }
                    >
                      {answers[questionNo]
                        ? options[answers[questionNo]]
                        : "Not Attended"}
                    </td>
                    <td>{options[answer]}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state:string) => {
  return { state };
};
export default connect(mapStateToProps)(Resutl);
