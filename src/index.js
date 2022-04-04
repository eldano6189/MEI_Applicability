import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataContext } from "./Context/Context";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <DataContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContext>
  </React.StrictMode>
);
