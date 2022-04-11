import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import store from "./store";

import Resutl from "./Result";
import ResutlChart from "./ResutlChart/";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
        <Route path="/result" element={<Resutl></Resutl>}></Route>
        <Route path="/result-pie" element={<ResutlChart></ResutlChart>}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
