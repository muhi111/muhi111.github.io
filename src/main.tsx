import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<ChakraProvider value={defaultSystem}>
			<Router>
				<Layout />
			</Router>
		</ChakraProvider>
	</React.StrictMode>,
);
