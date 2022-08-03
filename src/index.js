import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { VariantProvider } from "../src/context/variant.context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VariantProvider>
        <App />
      </VariantProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
