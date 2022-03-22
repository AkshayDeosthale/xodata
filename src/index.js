import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "flowbite";
import { store } from "./store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
