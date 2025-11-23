import { Box } from "@chakra-ui/react";
import {
	getMainContentMargin,
	getMainContentMaxWidth,
	LAYOUT_CONSTANTS,
} from "../../constants/layout";
import { LayoutProvider, useLayout } from "../../contexts/LayoutContext";
import Content from "./Content";
import Sidebar from "./Sidebar";

function LayoutContent() {
	const { isSidebarOpen, setIsSidebarOpen, isNarrowScreen } = useLayout();

	return (
		<Box minH="100dvh" bg="gray.50">
			<Sidebar />
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
						role="button"
						aria-label="Close navigation sidebar"
						tabIndex={0}
					/>
				)}
				<Box
					as="main"
					transition="all 0.3s"
					ml={getMainContentMargin(isNarrowScreen, isSidebarOpen)}
					maxW={getMainContentMaxWidth(isNarrowScreen, isSidebarOpen)}
				>
					<Box
						maxW={LAYOUT_CONSTANTS.MAX_CONTENT_WIDTH}
						mx="auto"
						px="4"
						py="6"
					>
						<Content />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default function Layout() {
	return (
		<LayoutProvider>
			<LayoutContent />
		</LayoutProvider>
	);
}
