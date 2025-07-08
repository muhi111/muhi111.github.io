import { Box, Heading, VStack } from "@chakra-ui/react";
import type { SkillCategory } from "../../data/skillsData";
import SkillItem from "./SkillItem";

interface SkillCardProps {
	category: string;
	skills: SkillCategory["skills"];
	onSkillClick: (skill: SkillCategory["skills"][0]) => void;
}

function SkillCard({ category, skills, onSkillClick }: SkillCardProps) {
	return (
		<Box bg="white" borderRadius="xl" boxShadow="sm" p="6">
			<Heading as="h3" size="lg" fontWeight="bold" color="gray.800" mb="4">
				{category}
			</Heading>
			<VStack gap="2">
				{skills.map((skill) => (
					<SkillItem
						key={skill.name}
						name={skill.name}
						level={skill.level}
						IconComponent={skill.icon}
						technologies={skill.technologies}
						onClick={() => onSkillClick(skill)}
					/>
				))}
			</VStack>
		</Box>
	);
}

export default SkillCard;
