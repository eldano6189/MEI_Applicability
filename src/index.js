import "./index.css";
import App from "./App";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { DataContext } from "./Context/Context";

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
