import {
	Box,
	Button,
	Flex,
	Heading,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import type { Work } from "../../data/worksData";

interface WorkDetailsProps {
	work: Work;
	onClose: () => void;
	isNarrowScreen: boolean;
	isSidebarOpen: boolean;
}

function WorkDetails({
	work,
	onClose,
	isNarrowScreen,
	isSidebarOpen,
}: WorkDetailsProps) {
	// サイドバーが開いている場合のモーダル位置調整
	const modalLeft = !isNarrowScreen && isSidebarOpen ? "256px" : "0";
	const modalWidth =
		!isNarrowScreen && isSidebarOpen ? "calc(100vw - 256px)" : "100vw";

	return (
		<Box
			position="fixed"
			top="0"
			left={modalLeft}
			width={modalWidth}
			height="100vh"
			zIndex="20"
			display="flex"
			alignItems="center"
			justifyContent="center"
			p="4"
			bg="blackAlpha.500"
			onClick={(e) => e.target === e.currentTarget && onClose()}
		>
			<Box
				bg="white"
				borderRadius="xl"
				boxShadow="2xl"
				maxW="3xl"
				w={`calc(100% - ${isNarrowScreen ? "2rem" : "4rem"})`}
				maxH="90dvh"
				overflowY="auto"
				onClick={(e) => e.stopPropagation()}
			>
				<Box p="6">
					<Flex justify="space-between" align="center" mb="6">
						<Heading as="h2" size="lg" fontWeight="bold" color="gray.900">
							{work.title}
						</Heading>
						<Button
							size="sm"
							variant="ghost"
							borderRadius="full"
							p="2"
							onClick={onClose}
							_hover={{ bg: "gray.100" }}
						>
							<MdClose size={24} />
						</Button>
					</Flex>

					<VStack gap="6" align="stretch">
						<Box>
							<Heading as="h3" size="md" fontWeight="semibold" mb="3">
								説明
							</Heading>
							<Text color="gray.700" lineHeight="relaxed" whiteSpace="pre-line">
								{work.description}
							</Text>
						</Box>

						{work.achievements.length > 0 && (
							<Box>
								<Heading as="h3" size="md" fontWeight="semibold" mb="3">
									受賞歴
								</Heading>
								<VStack align="stretch" gap="2">
									{work.achievements.map((achievement) => (
										<Box
											key={achievement}
											bg="blue.50"
											p="3"
											borderRadius="md"
											borderLeft="4px solid"
											borderLeftColor="blue.500"
										>
											<Text fontSize="sm" color="blue.900" fontWeight="medium">
												{achievement}
											</Text>
										</Box>
									))}
								</VStack>
							</Box>
						)}

						<Box>
							<Heading as="h3" size="md" fontWeight="semibold" mb="3">
								使用技術
							</Heading>
							<Flex wrap="wrap" gap="2">
								{work.tags.map((tag) => (
									<Text
										key={tag}
										fontSize="sm"
										bg="blue.100"
										color="blue.700"
										px="3"
										py="1"
										borderRadius="md"
										fontWeight="medium"
									>
										{tag}
									</Text>
								))}
							</Flex>
						</Box>

						<Box>
							<Heading as="h3" size="md" fontWeight="semibold" mb="3">
								リンク
							</Heading>
							<Flex gap="4">
								{work.githubLink && (
									<Link
										href={work.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										display="flex"
										alignItems="center"
										gap="2"
										px="4"
										py="2"
										bg="gray.100"
										borderRadius="md"
										color="gray.800"
										fontWeight="medium"
										transition="all 0.2s"
										_hover={{
											bg: "gray.200",
											transform: "translateY(-1px)",
										}}
									>
										<FaGithub size={20} />
										<Text>GitHub</Text>
									</Link>
								)}
								{work.liveLink && (
									<Link
										href={work.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										display="flex"
										alignItems="center"
										gap="2"
										px="4"
										py="2"
										bg="blue.100"
										borderRadius="md"
										color="blue.800"
										fontWeight="medium"
										transition="all 0.2s"
										_hover={{
											bg: "blue.200",
											transform: "translateY(-1px)",
										}}
									>
										<FaExternalLinkAlt size={18} />
										<Text>サイトへ</Text>
									</Link>
								)}
							</Flex>
						</Box>
					</VStack>
				</Box>
			</Box>
		</Box>
	);
}

export default WorkDetails;
