import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { LAYOUT_CONSTANTS } from "../../constants/layout";

import skillsData from "../../data/skillsData";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <Box minH="100dvh" bg="gray.50" py={{ base: "2", md: "12" }}>
      <Box maxW={LAYOUT_CONSTANTS.MAX_CONTENT_WIDTH} mx="auto" px={{ base: "1", md: "4" }} w="full">
        <Heading as="h1" size="3xl" fontWeight="bold" color="gray.900" textAlign="center" mb="12">
          Skills
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "4", md: "6" }} w="full">
          {skillsData.map((category) => (
            <SkillCard
              key={category.category}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
