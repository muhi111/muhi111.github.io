import { Box, Flex, Text } from "@chakra-ui/react";
import type { TimelineEvent } from "../../data/timelineData";

type TimelineEventProps = Omit<TimelineEvent, "id">;

export default function TimelineEventComponent({
	year,
	month,
	endYear,
	endMonth,
	title,
	description,
	icon,
	type,
}: TimelineEventProps) {
	const getTypeColor = (type: string) => {
		switch (type) {
			case "education":
				return "blue.500";
			case "work":
				return "green.500";
			case "achievement":
				return "purple.500";
			case "certification":
				return "orange.500";
			default:
				return "gray.500";
		}
	};

	const getDateRange = () => {
		if (endYear && endMonth) {
			return `${year}年${month} - ${endYear}年${endMonth}`;
		}
		return `${year}年${month}`;
	};

	return (
		<Box position="relative" w="full">
			{/* アイコン */}
			<Flex
				position="absolute"
				left={{ base: "0", md: "14" }}
				top={{ base: "0", md: "1" }}
				w="8"
				h="8"
				align="center"
				justify="center"
				bg="white"
				borderRadius="full"
				border="2px solid"
				borderColor={getTypeColor(type)}
				zIndex={10}
			>
				<Box fontSize="md" role="img" aria-label={`${type} icon`}>
					{icon}
				</Box>
			</Flex>

			{/* コンテンツ */}
			<Box
				ml={{ base: "12", md: "24" }}
				p={{ base: "4", md: "6" }}
				bg="white"
				borderRadius="lg"
				boxShadow="sm"
				border="1px solid"
				borderColor="gray.200"
			>
				<Flex
					direction={{ base: "column", md: "row" }}
					align={{ base: "flex-start", md: "center" }}
					justify="space-between"
					mb="2"
				>
					<Text
						fontSize={{ base: "lg", md: "xl" }}
						fontWeight="semibold"
						color="gray.900"
					>
						{title}
					</Text>
					<Text
						fontSize={{ base: "sm", md: "base" }}
						color="gray.600"
						mt={{ base: "1", md: "0" }}
					>
						{getDateRange()}
					</Text>
				</Flex>
				{description && (
					<Text
						fontSize={{ base: "sm", md: "base" }}
						color="gray.700"
						lineHeight="relaxed"
					>
						{description}
					</Text>
				)}
			</Box>
		</Box>
	);
}
