import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LAYOUT_CONSTANTS } from "../../constants/layout";

import type { Skill } from "../../data/skillsData";
import skillsData from "../../data/skillsData";
import SkillCard from "./SkillCard";
import SkillDetails from "./SkillDetails";

export default function Skills() {
	// useLayout is technically not used here directly if SkillDetails consumes it,
	// BUT if Skills used isNarrowScreen for grid layout or something?
	// Checking the file...
	// It used props: interface SkillsProps { isNarrowScreen, isSidebarOpen }
	// But inside the component:
	// "SimpleGrid columns={{ base: 1, md: 2 }}" - uses Chakra responsive styles.
	// The props were ONLY passed to SkillDetails.
	// So I don't strictly need useLayout here if I don't pass them.
	// However, just to be safe and consistent I'll check if anything else needed it.
	// Previous code: passed props to SkillDetails.
	// So Skills itself doesn't seem to use them.

	// Wait, I see:
	// export default function Skills({ isNarrowScreen, isSidebarOpen }: SkillsProps)
	// ...
	// <SkillDetails ... isNarrowScreen={isNarrowScreen} isSidebarOpen={isSidebarOpen} />

	// So Skills acts as a pass-through.
	// If SkillDetails uses context, Skills doesn't need to fetch it.

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
		<Box minH="100dvh" bg="gray.50" py={{ base: "2", md: "12" }}>
			<Box
				maxW={LAYOUT_CONSTANTS.MAX_CONTENT_WIDTH}
				mx="auto"
				px={{ base: "1", md: "4" }}
				w="full"
			>
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
					/>
				)}
			</Box>
		</Box>
	);
}
