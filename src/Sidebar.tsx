import { Box, Button, Flex, IconButton, Link, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaBars, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const newIsNarrowScreen = width <= 1650;
			if (newIsNarrowScreen) setIsOpen(false);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [setIsOpen]);

	const handleNavigation = (path: string): void => {
		navigate(path);
		if (isNarrowScreen) setIsOpen(false);
	};

	return (
		<>
			<IconButton
				aria-label="Toggle Sidebar"
				onClick={() => setIsOpen(!isOpen)}
				position="fixed"
				top="1rem"
				left="1rem"
				zIndex="20"
				size="lg"
				color={isOpen ? "gray.100" : "gray.800"}
				_hover={{
					color: isOpen ? "gray.400" : "gray.500",
				}}
			>
				<FaBars />
			</IconButton>

			<Box
				bg="gray.800"
				color="white"
				w="64"
				minH="100dvh"
				p="4"
				pos="fixed"
				top="0"
				left="0"
				zIndex="9"
				transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
				transition="transform 0.3s ease-in-out"
			>
				<VStack align="stretch" mt="20">
					<Button
						variant="ghost"
						w="full"
						justifyContent="flex-start"
						onClick={() => handleNavigation("/")}
						color="gray.100"
						fontSize="lg"
						_hover={{ color: "gray.400" }}
					>
						Home
					</Button>
					<Button
						variant="ghost"
						w="full"
						justifyContent="flex-start"
						onClick={() => handleNavigation("/skills")}
						color="gray.100"
						fontSize="lg"
						_hover={{ color: "gray.400" }}
					>
						Skills
					</Button>
					<Button
						variant="ghost"
						w="full"
						justifyContent="flex-start"
						onClick={() => handleNavigation("/works")}
						color="gray.100"
						fontSize="lg"
						_hover={{ color: "gray.400" }}
					>
						Works
					</Button>
				</VStack>
				<Flex position="absolute" bottom="4" left="4">
					<Link
						href="https://github.com/muhi111"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub size={50} color="gray.400" />
					</Link>
					<Link
						href="https://qiita.com/muhi111"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/portfolio/qiita.png"
							alt="Qiita"
							width={50}
							style={{
								filter: "grayscale(100%) brightness(160%)",
								marginLeft: "1rem",
							}}
						/>
					</Link>
				</Flex>
			</Box>
		</>
	);
}

export default Sidebar;
