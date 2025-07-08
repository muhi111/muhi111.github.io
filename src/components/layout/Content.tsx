import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Skills from "../skills/Skills";
import Works from "../works/Works";

interface ContentProps {
	isNarrowScreen: boolean;
}

function Content({ isNarrowScreen }: ContentProps) {
	return (
		<Routes>
			<Route path="/" element={<Home isNarrowScreen={isNarrowScreen} />} />
			<Route
				path="/skills"
				element={<Skills isNarrowScreen={isNarrowScreen} />}
			/>
			<Route
				path="/works"
				element={<Works isNarrowScreen={isNarrowScreen} />}
			/>
		</Routes>
	);
}

export default Content;
