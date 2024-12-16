import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Works from "./Works";

function Content() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/works" element={<Works />} />
		</Routes>
	);
}

export default Content;
