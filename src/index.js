import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Store Import
import store from "./redux/store";
import App from "./App";

// CSS Import
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/* Run if new data is required to add inside Firestore with new data in shop.data.js */}
      
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);