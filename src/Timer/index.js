import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

const Timer = (props) => {
  const { initialMinute, initialSeconds, nextQuetion, questionNo } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    setMinutes(1);
    setSeconds(0);
  }, [questionNo]);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          nextQuetion();

          setMinutes(initialMinute);
          setSeconds(initialSeconds);
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
    <div className="timer">
      {minutes === 0 && seconds === 0 ? (
        <h1>0:00</h1>
      ) : (
        <>
          <h4>{sessionStorage.getItem("name")}</h4>
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </>
      )}
    </div>
  );
};

export default Timer;
