import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import type { Skill } from "../../data/skillsData";
import skillsData from "../../data/skillsData";
import SkillCard from "./SkillCard";
import SkillDetails from "./SkillDetails";

interface SkillsProps {
	isNarrowScreen: boolean;
}

export default function Skills({ isNarrowScreen }: SkillsProps) {
	const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsDetailsOpen(false);
			}
		};

		if (isDetailsOpen) {
			document.addEventListener("keydown", handleEscape);
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isDetailsOpen]);

	const handleSkillClick = (skill: Skill) => {
		setSelectedSkill(skill);
		setIsDetailsOpen(true);
	};

	return (
		<Box minH="100vh" bg="gray.50" py={{ base: "2", md: "12" }}>
			<Box maxW="1200px" mx="auto" px={{ base: "1", md: "4" }} w="full">
				<Heading
					as="h2"
					size="3xl"
					fontWeight="bold"
					color="gray.900"
					textAlign="center"
					mb="12"
				>
					Skills
				</Heading>
				<SimpleGrid
					columns={{ base: 1, md: 2 }}
					gap={{ base: "4", md: "6" }}
					w="full"
				>
					{skillsData.map((category) => (
						<SkillCard
							key={category.category}
							category={category.category}
							skills={category.skills}
							onSkillClick={handleSkillClick}
						/>
					))}
				</SimpleGrid>

				{isDetailsOpen && selectedSkill && (
					<SkillDetails
						skill={selectedSkill}
						onClose={() => setIsDetailsOpen(false)}
						isNarrowScreen={isNarrowScreen}
					/>
				)}
			</Box>
		</Box>
	);
}
