import { Box, Heading, VStack } from "@chakra-ui/react";
import type { SkillCategory } from "../../data/skillsData";
import SkillItem from "./SkillItem";

interface SkillCardProps {
  category: string;
  skills: SkillCategory["skills"];
}

function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <Box bg="white" borderRadius="xl" boxShadow="sm" p="6">
      <Heading as="h3" size="lg" fontWeight="bold" color="gray.800" mb="4">
        {category}
      </Heading>
      <VStack gap="4">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            IconComponent={skill.icon}
            description={skill.description}
            projects={skill.projects}
            technologies={skill.technologies}
          />
        ))}
      </VStack>
    </Box>
  );
}

export default SkillCard;
