import * as React from "react";
import ReactDOM from "react-dom";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./components";

import { Provider } from "react-redux";
import { createStore } from "redux";

// const store = createStore();

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className="border-container">
        <li className="border-item" style={{ background: "var(--red)" }} />
        <li className="border-item" style={{ background: "var(--blue)" }} />
        <li className="border-item" style={{ background: "var(--pink)" }} />
        <li className="border-item" style={{ background: "var(--yellow)" }} />
        <li className="border-item" style={{ background: "var(--aqua)" }} />
      </ul>
    </React.Fragment>
  );
}

ReactDOM.render(
  <>
    <ColorfulBorder />
    <App />
  </>,
  document.getElementById("root")
);
