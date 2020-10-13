import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./components";

import { Provider } from "react-redux";
import { createStore } from "redux";
//import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducers";
import LoadingBar from "react-redux-loading-bar";
import middleware from "./middleware";

function ColorfulBorder() {
  return (
    <>
      <ul className="border-container">
        <li className="border-item" style={{ background: "var(--red)" }} />
        <li className="border-item" style={{ background: "var(--blue)" }} />
        <li className="border-item" style={{ background: "var(--pink)" }} />
        <li className="border-item" style={{ background: "var(--yellow)" }} />
        <li className="border-item" style={{ background: "var(--aqua)" }} />
      </ul>
      <LoadingBar />
    </>
  );
}

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <ColorfulBorder />
    <App />
  </Provider>,
  document.getElementById("root")
);
