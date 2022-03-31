import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { VehContext } from "./Context/Context";

ReactDOM.render(
  <React.StrictMode>
    <VehContext>
      <App />
    </VehContext>
  </React.StrictMode>,
  document.getElementById("root")
);
