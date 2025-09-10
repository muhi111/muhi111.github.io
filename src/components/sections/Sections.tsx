import { Box, Heading, VStack } from "@chakra-ui/react";
import {
	certificationsAndAchievementsData,
	educationData,
	internshipsData,
} from "../../data/sectionsData";
import SectionItemList from "./SectionItemList";

export default function Sections() {
	return (
		<VStack gap="10" align="stretch">
			{/* 学業セクション */}
			<Box bg="white" borderRadius="lg" boxShadow="md" overflow="hidden">
				<Box bg="blue.100" color="blue.800" px={6} py={4}>
					<Heading as="h2" size="lg" fontWeight="bold">
						学業
					</Heading>
				</Box>
				<Box p={6}>
					{educationData.map((item) => (
						<SectionItemList key={item.id} item={item} />
					))}
				</Box>
			</Box>

			{/* 資格と入賞歴セクション */}
			<Box bg="white" borderRadius="lg" boxShadow="md" overflow="hidden">
				<Box bg="blue.100" color="blue.800" px={6} py={4}>
					<Heading as="h2" size="lg" fontWeight="bold">
						資格と入賞歴
					</Heading>
				</Box>
				<Box p={6}>
					{certificationsAndAchievementsData.map((item) => (
						<SectionItemList key={item.id} item={item} />
					))}
				</Box>
			</Box>

			{/* インターンセクション */}
			<Box bg="white" borderRadius="lg" boxShadow="md" overflow="hidden">
				<Box bg="blue.100" color="blue.800" px={6} py={4}>
					<Heading as="h2" size="lg" fontWeight="bold">
						インターン
					</Heading>
				</Box>
				<Box p={6}>
					{internshipsData.map((item) => (
						<SectionItemList key={item.id} item={item} />
					))}
				</Box>
			</Box>
		</VStack>
	);
}
