import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LAYOUT_CONSTANTS } from "../../constants/layout";
import type { Work } from "../../data/worksData";
import { worksData } from "../../data/worksData";
import WorkCard from "./WorkCard";
import WorkDetails from "./WorkDetails";

interface WorksProps {
	isNarrowScreen: boolean;
}

export default function Works({ isNarrowScreen }: WorksProps) {
	const [selectedWork, setSelectedWork] = useState<Work | null>(null);
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsDetailsOpen(false);
			}
		};

		if (isDetailsOpen) {
			document.addEventListener("keydown", handleEscape);
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isDetailsOpen]);

	const handleWorkClick = (work: Work) => {
		setSelectedWork(work);
		setIsDetailsOpen(true);
	};

	return (
		<Box minH="100dvh" bg="gray.50" py={{ base: "2", md: "12" }}>
			<Box
				maxW={LAYOUT_CONSTANTS.MAX_CONTENT_WIDTH}
				mx="auto"
				px={{ base: "1", md: "4" }}
				w="full"
			>
				<Heading
					as="h2"
					size="3xl"
					fontWeight="bold"
					color="gray.900"
					textAlign="center"
					mb="12"
				>
					Works
				</Heading>
				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 3 }}
					gap={{ base: "4", md: "6" }}
					w="full"
				>
					{worksData.map((work) => (
						<WorkCard
							key={work.title}
							work={work}
							onClick={() => handleWorkClick(work)}
						/>
					))}
				</SimpleGrid>

				{isDetailsOpen && selectedWork && (
					<WorkDetails
						work={selectedWork}
						onClose={() => setIsDetailsOpen(false)}
						isNarrowScreen={isNarrowScreen}
					/>
				)}
			</Box>
		</Box>
	);
}
