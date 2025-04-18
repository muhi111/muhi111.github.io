import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout/Layout";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>,
);
