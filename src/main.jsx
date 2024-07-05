import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize";

import { persistor, store } from "@redux/store.js";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ModalProvider } from "./context/ModalProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
