import { Box, Flex, Text } from "@chakra-ui/react";
import {
	FaBriefcase,
	FaCertificate,
	FaGraduationCap,
	FaLaptopCode,
	FaTrophy,
} from "react-icons/fa";
import type { SectionItem } from "../../data/sectionsData";

interface SectionItemProps {
	item: SectionItem;
}

export default function SectionItemList({ item }: SectionItemProps) {
	const getIcon = (iconType: string) => {
		switch (iconType) {
			case "education":
				return <FaGraduationCap size={16} />;
			case "certification":
				return <FaCertificate size={16} />;
			case "achievement":
				return <FaTrophy size={16} />;
			case "work":
			case "internship":
				return <FaBriefcase size={16} />;
			case "tech":
				return <FaLaptopCode size={16} />;
			default:
				return <FaGraduationCap size={16} />;
		}
	};

	const getDateRange = () => {
		if (item.endYear && item.endMonth) {
			if (item.isCurrent) {
				return `${item.year}年${item.month} - 現在`;
			}
			return `${item.year}年${item.month} - ${item.endYear}年${item.endMonth}`;
		}
		return `${item.year}年${item.month}`;
	};

	return (
		<Box
			py={4}
			borderBottom="1px solid"
			borderColor="gray.100"
			_last={{ borderBottom: "none" }}
		>
			<Flex direction="column" gap={2}>
				{/* 日付とアイコン */}
				<Flex align="center" gap={3}>
					<Box color="gray.600">{getIcon(item.iconType)}</Box>
					<Text fontSize="sm" color="gray.500" fontWeight="medium">
						{getDateRange()}
					</Text>
				</Flex>

				{/* タイトル */}
				<Text
					fontSize="lg"
					fontWeight="semibold"
					color="gray.900"
					lineHeight="short"
				>
					{item.title}
				</Text>

				{/* 説明 */}
				{item.description && (
					<Text fontSize="sm" color="gray.600" lineHeight="relaxed">
						{item.description}
					</Text>
				)}
			</Flex>
		</Box>
	);
}
