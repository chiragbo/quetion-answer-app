import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { connect } from "react-redux";

export const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function startTest() {
    if (name !== "") {
      sessionStorage.setItem("name", name);
      navigate("/test");
    } else {
    }
  }

  return (
    <div className="login">
      <h2>Test for JavaScript</h2>
      <input
        placeholder="Enter Name"
        type="input"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => startTest()}>Start Test</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps)(Login);
