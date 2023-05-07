import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { RefreshProvider } from "./contexts/RefreshContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RefreshProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RefreshProvider>
);
