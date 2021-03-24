import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

Reactdom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
