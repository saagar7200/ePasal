import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "./Route.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Route />
    </Router>
  </React.StrictMode>
);
