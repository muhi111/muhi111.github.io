import {
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import type { Skill } from "../../data/skillsData";

interface SkillDetailsProps {
	skill: Skill;
	onClose: () => void;
	isNarrowScreen: boolean;
}

function SkillDetails({ skill, onClose, isNarrowScreen }: SkillDetailsProps) {
	const levelIndicators = Array.from({ length: 5 }, (_, i) => ({
		id: `level-indicator-${i + 1}`,
		position: i + 1,
		filled: i < skill.level,
	}));

	return (
		<Box
			position="fixed"
			inset="0"
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
				maxW="2xl"
				w={`calc(100% - ${isNarrowScreen ? "2rem" : "4rem"})`}
				maxH="90vh"
				overflowY="auto"
				onClick={(e) => e.stopPropagation()}
			>
				<Box p="6">
					<Flex justify="space-between" align="center" mb="6">
						<Flex align="center" gap="3">
							<Icon as={skill.icon} w="8" h="8" color="blue.500" />
							<Heading as="h2" size="lg" fontWeight="bold" color="gray.900">
								{skill.name}
							</Heading>
						</Flex>
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
							<Heading as="h3" size="md" fontWeight="semibold" mb="2">
								レベル
							</Heading>
							<Flex align="center" gap="2">
								{levelIndicators.map((indicator) => (
									<Icon
										as={FaStar}
										key={indicator.id}
										w={4}
										h={4}
										color={indicator.filled ? "yellow.400" : "gray.300"}
									/>
								))}
								<Text ml="2" fontSize="sm" color="gray.600">
									{skill.level}/5
								</Text>
							</Flex>
						</Box>

						<Box>
							<Heading as="h3" size="md" fontWeight="semibold" mb="2">
								説明
							</Heading>
							<Text color="gray.700" lineHeight="relaxed">
								{skill.description}
							</Text>
						</Box>

						<Box>
							<Heading as="h3" size="md" fontWeight="semibold" mb="2">
								経験
							</Heading>
							<Text color="gray.700">{skill.experience}</Text>
						</Box>

						<Box>
							<Heading as="h3" size="md" fontWeight="semibold" mb="2">
								プロジェクト
							</Heading>
							<VStack align="stretch" gap="2">
								{skill.projects.map((project) => (
									<Box
										key={project}
										bg="gray.50"
										p="3"
										borderRadius="md"
										borderLeft="4px solid"
										borderLeftColor="blue.500"
									>
										<Text fontSize="sm" color="gray.700">
											{project}
										</Text>
									</Box>
								))}
							</VStack>
						</Box>

						{skill.technologies && skill.technologies.length > 0 && (
							<Box>
								<Heading as="h3" size="md" fontWeight="semibold" mb="2">
									関連技術
								</Heading>
								<Flex wrap="wrap" gap="2">
									{skill.technologies.map((tech) => (
										<Text
											key={tech}
											fontSize="sm"
											bg="blue.100"
											color="blue.700"
											px="3"
											py="1"
											borderRadius="md"
											fontWeight="medium"
										>
											{tech}
										</Text>
									))}
								</Flex>
							</Box>
						)}
					</VStack>
				</Box>
			</Box>
		</Box>
	);
}

export default SkillDetails;
