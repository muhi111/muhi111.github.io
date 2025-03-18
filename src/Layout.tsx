import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Content from "./Content";
import Sidebar from "./Sidebar";

function Layout() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isNarrowScreen, setIsNarrowScreen] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const newIsNarrowScreen = width <= 1300;
			setIsNarrowScreen(newIsNarrowScreen);
			setIsSidebarOpen(width > 1300);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Router>
			<div className="min-h-screen bg-gray-50">
				<Sidebar
					isOpen={isSidebarOpen}
					setIsOpen={setIsSidebarOpen}
					isNarrowScreen={isNarrowScreen}
				/>
				<div className="relative">
					{isNarrowScreen && isSidebarOpen && (
						<div
							className="fixed inset-0 bg-black/50 z-[15] transition-opacity"
							onClick={() => setIsSidebarOpen(false)}
							onKeyDown={(e) => {
								if (e.key === "Escape") setIsSidebarOpen(false);
							}}
							role="presentation"
						/>
					)}
					<main
						className={`transition-all duration-300 ${
							!isNarrowScreen && isSidebarOpen
								? "ml-64 max-w-[calc(100%-256px)]"
								: ""
						}`}
					>
						<div className="container mx-auto px-4 py-6">
							<Content
								isNarrowScreen={isNarrowScreen}
								isSidebarOpen={isSidebarOpen}
							/>
						</div>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default Layout;
