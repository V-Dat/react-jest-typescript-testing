import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ReduxProvider from "./components/common/ReduxProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReduxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
);
