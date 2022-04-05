import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { connect } from "react-redux";

export const Login = () => {
  const [name, setName] = useState("");
  function startTest() {
    sessionStorage.setItem("name", name);
  }

  return (
    <div className="login">
      <h2>Question And Answer</h2>
      <input
        placeholder="Enter Name"
        type="input"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <Link to="/test">
        <button onClick={() => startTest()}>Start Test</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps)(Login);
