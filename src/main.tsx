import React from "react";
import ReactDOM from "react-dom/client";
import { environment } from "./config/constants";
import App from "./App";
import "./index.css";
import { startServiceWorker } from "./mocks/startServiceWorker";

if (environment === "development") {
  startServiceWorker();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
