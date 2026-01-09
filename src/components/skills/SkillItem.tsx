import { Box, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface SkillItemProps {
  name: string;
  IconComponent: IconType;
  description: string;
  projects: string[];
  technologies?: string[];
}

function SkillItem({ name, IconComponent, description, projects, technologies }: SkillItemProps) {
  return (
    <Box w="full" bg="gray.50" borderRadius="lg" p="4">
      <Flex align="center" gap="3" mb="3">
        <Icon as={IconComponent} w="6" h="6" color="blue.500" />
        <Heading as="h3" fontSize="lg" fontWeight="bold" color="gray.800">
          {name}
        </Heading>
      </Flex>

      <VStack align="stretch" gap="3">
        <Text color="gray.700" fontSize="sm" lineHeight="relaxed">
          {description}
        </Text>

        {technologies && technologies.length > 0 && (
          <Flex gap="2" wrap="wrap">
            {technologies.map((tech) => (
              <Text
                key={tech}
                fontSize="xs"
                bg="blue.50"
                color="blue.700"
                px="2"
                py="1"
                borderRadius="md"
                fontWeight="medium"
              >
                {tech}
              </Text>
            ))}
          </Flex>
        )}

        {projects && projects.length > 0 && (
          <Box>
            <Heading
              as="h4"
              fontSize="xs"
              fontWeight="semibold"
              color="gray.500"
              mb="1"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Projects
            </Heading>
            <VStack align="stretch" gap="1">
              {projects.map((project) => (
                <Flex key={project} align="center" gap="2">
                  <Box w="1.5" h="1.5" borderRadius="full" bg="gray.400" />
                  <Text fontSize="sm" color="gray.600">
                    {project}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default SkillItem;
