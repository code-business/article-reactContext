import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NotificationProvider } from "./components/NotificationProvider/NotificationProvider";

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
