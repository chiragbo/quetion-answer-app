import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
interface MyProps {
  initialMinute: number;
  initialSeconds: number;
  showPieChar: Function;
}
const TestTimer:React.FC<MyProps> = (props) => {
  const { initialMinute, initialSeconds, showPieChar } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          showPieChar();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="test-timer">
      {minutes === 0 && seconds === 0 ? (
        <>
          <h1>0:00</h1>
          <h4>{sessionStorage.getItem("name")}</h4>
        </>
      ) : (
        <>
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <h4>{sessionStorage.getItem("name")}</h4>
        </>
      )}
    </div>
  );
};

export default TestTimer;
