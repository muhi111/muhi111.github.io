import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaStar } from "react-icons/fa";

interface SkillItemProps {
	name: string;
	level: number;
	IconComponent: IconType;
	technologies?: string[];
	onClick?: () => void;
}

function SkillItem({
	name,
	level,
	IconComponent,
	technologies,
	onClick,
}: SkillItemProps) {
	const levelIndicators = Array.from({ length: 5 }, (_, i) => ({
		id: `level-indicator-${i + 1}`,
		position: i + 1,
		filled: i < level,
	}));

	return (
		<Box
			w="full"
			bg="gray.50"
			borderRadius="lg"
			p="4"
			cursor="pointer"
			transition="all 0.3s"
			_hover={{ bg: "gray.100", transform: "translateY(-2px)" }}
			onClick={onClick}
		>
			<Flex align="center" justify="space-between">
				<Flex align="center" gap="3">
					<Icon as={IconComponent} w="5" h="5" color="gray.600" />
					<Text fontSize="md" fontWeight="medium" color="gray.800">
						{name}
					</Text>
				</Flex>
				<Flex align="center" gap="1">
					{levelIndicators.map((indicator) => (
						<Icon
							as={FaStar}
							key={indicator.id}
							w={4}
							h={4}
							color={indicator.filled ? "yellow.400" : "gray.300"}
						/>
					))}
				</Flex>
			</Flex>
			{technologies && technologies.length > 0 && (
				<Flex mt="2" gap="1" wrap="wrap">
					{technologies.map((tech) => (
						<Text
							key={tech}
							fontSize="xs"
							bg="blue.100"
							color="blue.700"
							px="2"
							py="1"
							borderRadius="md"
						>
							{tech}
						</Text>
					))}
				</Flex>
			)}
		</Box>
	);
}

export default SkillItem;
