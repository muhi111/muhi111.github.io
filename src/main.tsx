import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { Provider } from "./components/ui/provider";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<Provider>
			<Layout />
		</Provider>
	</React.StrictMode>,
);
