import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./state/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";

import Resutl from "./Result";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
        <Route path="/result" element={<Resutl></Resutl>}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
