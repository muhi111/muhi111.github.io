import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Layout() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isNarrowScreen, setIsNarrowScreen] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const newIsNarrowScreen = width <= 1300;
			const newIsSidebarOpen = width > 1300;

			setIsNarrowScreen(newIsNarrowScreen);
			setIsSidebarOpen(newIsSidebarOpen);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Box minH="100vh" bg="gray.50">
			<Sidebar
				isOpen={isSidebarOpen}
				setIsOpen={setIsSidebarOpen}
				isNarrowScreen={isNarrowScreen}
			/>
			<Box position="relative">
				{isNarrowScreen && isSidebarOpen && (
					<Box
						position="fixed"
						top="0"
						left="0"
						right="0"
						bottom="0"
						bg="blackAlpha.500"
						zIndex="15"
						transition="opacity 0.3s"
						onClick={() => setIsSidebarOpen(false)}
						onKeyDown={(e: React.KeyboardEvent) => {
							if (e.key === "Escape") setIsSidebarOpen(false);
						}}
						role="presentation"
					/>
				)}
				<Box
					as="main"
					transition="all 0.3s"
					ml={!isNarrowScreen && isSidebarOpen ? "256px" : "0"}
					maxW={
						!isNarrowScreen && isSidebarOpen ? "calc(100% - 256px)" : "100%"
					}
				>
					<Box maxW="1200px" mx="auto" px="4" py="6">
						<Content isNarrowScreen={isNarrowScreen} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
