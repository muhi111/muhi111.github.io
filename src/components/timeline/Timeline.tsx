import { Box, VStack } from "@chakra-ui/react";
import { timelineData } from "../../data/timelineData";
import TimelineEventComponent from "./TimelineEvent";

export default function Timeline() {
	return (
		<Box position="relative">
			{/* 中央の垂直線（モバイルでは非表示） */}
			<Box
				position="absolute"
				left="16"
				top="4"
				h="full"
				w="0.5"
				bg="gray.200"
				display={{ base: "none", md: "block" }}
			/>

			{/* タイムラインイベント */}
			<VStack gap={{ base: "6", md: "12" }}>
				{timelineData.map((event) => (
					<TimelineEventComponent
						key={event.id}
						year={event.year}
						month={event.month}
						endYear={event.endYear}
						endMonth={event.endMonth}
						title={event.title}
						description={event.description}
						icon={event.icon}
						type={event.type}
					/>
				))}
			</VStack>
		</Box>
	);
}
