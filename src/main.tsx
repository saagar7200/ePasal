import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import LanguageProvider from "@contexts/Langunage/Language.tsx";
import ColorProvider from "@provider/ColorProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <ColorProvider>
          <App />
        </ColorProvider>
      </Router>
    </LanguageProvider>
  </React.StrictMode>
);
