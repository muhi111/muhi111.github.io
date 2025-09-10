import { Box, Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LAYOUT_CONSTANTS } from "../../constants/layout";

function Sidebar({
	isOpen,
	setIsOpen,
	isNarrowScreen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isNarrowScreen: boolean;
}) {
	const navigate = useNavigate();

	const handleNavigation = (path: string): void => {
		navigate(path);
		if (isNarrowScreen) setIsOpen(false);
	};

	return (
		<>
			<Button
				position="fixed"
				top="4"
				left="4"
				zIndex="30"
				p="3"
				borderRadius="full"
				boxShadow="md"
				transition="all 0.3s"
				bg={isOpen ? "gray.700" : "white"}
				color={isOpen ? "white" : "gray.800"}
				_hover={{
					bg: isOpen ? "gray.600" : "gray.100",
				}}
				aria-label="Toggle Sidebar"
				onClick={() => setIsOpen(!isOpen)}
			>
				<FaBars size={24} />
			</Button>

			<Box
				position="fixed"
				top="0"
				left="0"
				zIndex="25"
				w={LAYOUT_CONSTANTS.SIDEBAR_WIDTH}
				h="100dvh"
				bg="gray.800"
				boxShadow="2xl"
				transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
				transition="transform 0.3s ease-in-out"
			>
				<Box
					as="nav"
					display="flex"
					flexDirection="column"
					mt="20"
					p="4"
					gap="3"
					overflowY="auto"
					maxH="calc(100dvh - 160px)"
				>
					<Button
						w="full"
						textAlign="left"
						px="6"
						py="4"
						color="gray.100"
						fontSize="xl"
						fontWeight="bold"
						borderRadius="lg"
						transition="all 0.2s"
						bg="transparent"
						_hover={{
							bg: "gray.600",
						}}
						onClick={() => handleNavigation("/")}
					>
						Home
					</Button>
					<Button
						w="full"
						textAlign="left"
						px="6"
						py="4"
						color="gray.100"
						fontSize="xl"
						fontWeight="bold"
						borderRadius="lg"
						transition="all 0.2s"
						bg="transparent"
						_hover={{
							bg: "gray.600",
						}}
						onClick={() => handleNavigation("/articles")}
					>
						Articles
					</Button>
					<Button
						w="full"
						textAlign="left"
						px="6"
						py="4"
						color="gray.100"
						fontSize="xl"
						fontWeight="bold"
						borderRadius="lg"
						transition="all 0.2s"
						bg="transparent"
						_hover={{
							bg: "gray.600",
						}}
						onClick={() => handleNavigation("/works")}
					>
						Works
					</Button>
					<Button
						w="full"
						textAlign="left"
						px="6"
						py="4"
						color="gray.100"
						fontSize="xl"
						fontWeight="bold"
						borderRadius="lg"
						transition="all 0.2s"
						bg="transparent"
						_hover={{
							bg: "gray.600",
						}}
						onClick={() => handleNavigation("/skills")}
					>
						Skills
					</Button>
				</Box>
			</Box>
		</>
	);
}

export default Sidebar;
