import React, { useState } from "react";
import Test from "../Test";
import "./index.css";
import { connect } from "react-redux";

export const Login = () => {
  const [name, setName] = useState("");
  const [sessionName, setsessionName] = useState("");
  function startTest() {
    sessionStorage.setItem("name", name);
    setsessionName(name);
  }

  return sessionName === "" ? (
    <div className="login">
      <h2>Question And Answer</h2>
      <input
        placeholder="Enter Name"
        type="input"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => startTest()}>Start Test</button>
    </div>
  ) : (
    <Test></Test>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps)(Login);
