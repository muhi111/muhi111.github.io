import { Provider } from "./components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Layout />
    </Provider>
  </React.StrictMode>,
);
