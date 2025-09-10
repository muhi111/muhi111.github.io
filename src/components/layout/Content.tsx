import { Route, Routes } from "react-router-dom";
import Articles from "../articles/Articles";
import Home from "../home/Home";
import Skills from "../skills/Skills";
import Works from "../works/Works";

interface ContentProps {
	isNarrowScreen: boolean;
	isSidebarOpen: boolean;
}

function Content({ isNarrowScreen, isSidebarOpen }: ContentProps) {
	return (
		<Routes>
			<Route path="/" element={<Home isNarrowScreen={isNarrowScreen} />} />
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
			<Route path="/articles" element={<Articles />} />
		</Routes>
	);
}

export default Content;
