import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Work } from "../../data/worksData";

interface WorkCardProps {
	work: Work;
	onClick: () => void;
}

function WorkCard({ work, onClick }: WorkCardProps) {
	return (
		<Box
			bg="white"
			borderRadius="xl"
			boxShadow="lg"
			p="6"
			cursor="pointer"
			transition="all 0.3s"
			_hover={{
				transform: "translateY(-4px)",
				boxShadow: "xl",
			}}
			onClick={onClick}
		>
			<Heading
				as="h3"
				size="md"
				fontWeight="bold"
				color="gray.900"
				mb="3"
				overflow="hidden"
				textOverflow="ellipsis"
				whiteSpace="nowrap"
			>
				{work.title}
			</Heading>
			<Text
				fontSize="sm"
				color="gray.600"
				lineHeight="relaxed"
				mb="4"
				overflow="hidden"
				display="-webkit-box"
				style={{
					WebkitLineClamp: 4,
					WebkitBoxOrient: "vertical",
				}}
			>
				{work.description}
			</Text>
			<Flex wrap="wrap" gap="2" mb="4">
				{work.tags.slice(0, 3).map((tag) => (
					<Text
						key={tag}
						fontSize="xs"
						bg="blue.100"
						color="blue.700"
						px="2"
						py="1"
						borderRadius="md"
						fontWeight="medium"
					>
						{tag}
					</Text>
				))}
				{work.tags.length > 3 && (
					<Text
						fontSize="xs"
						bg="gray.100"
						color="gray.600"
						px="2"
						py="1"
						borderRadius="md"
						fontWeight="medium"
					>
						+{work.tags.length - 3}
					</Text>
				)}
			</Flex>
			<Flex gap="3" align="center">
				{work.githubLink && (
					<Link
						href={work.githubLink}
						target="_blank"
						rel="noopener noreferrer"
						color="gray.600"
						transition="color 0.2s"
						_hover={{ color: "gray.900" }}
						onClick={(e) => e.stopPropagation()}
					>
						<FaGithub size={20} />
					</Link>
				)}
				{work.liveLink && (
					<Link
						href={work.liveLink}
						target="_blank"
						rel="noopener noreferrer"
						color="gray.600"
						transition="color 0.2s"
						_hover={{ color: "gray.900" }}
						onClick={(e) => e.stopPropagation()}
						aria-label="サイトへ"
					>
						<FaExternalLinkAlt size={18} />
					</Link>
				)}
			</Flex>
		</Box>
	);
}

export default WorkCard;
