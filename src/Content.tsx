import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Works from "./Works";

interface ContentProps {
	isNarrowScreen: boolean;
	isSidebarOpen: boolean;
}

function Content({ isNarrowScreen, isSidebarOpen }: ContentProps) {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/skills"
				element={
					<Skills
						isNarrowScreen={isNarrowScreen}
						isSidebarOpen={isSidebarOpen}
					/>
				}
			/>
			<Route
				path="/works"
				element={
					<Works
						isNarrowScreen={isNarrowScreen}
						isSidebarOpen={isSidebarOpen}
					/>
				}
			/>
		</Routes>
	);
}

export default Content;
