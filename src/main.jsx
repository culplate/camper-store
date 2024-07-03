import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "modern-normalize";
import { ModalProvider } from "./context/ModalProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>
);
