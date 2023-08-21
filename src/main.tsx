import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "./Route.tsx";
import LanguageProvider from "@contexts/Langunage/Language.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <Route />
      </Router>
    </LanguageProvider>
  </React.StrictMode>
);
