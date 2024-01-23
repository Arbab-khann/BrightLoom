import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/redux/Redusstore";
// import DueDateCalculator from "./components/dashboard/Duedate";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    {/* <DueDateCalculator /> */}
  </Provider>
);
