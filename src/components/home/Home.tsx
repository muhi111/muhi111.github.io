import { Box, Heading } from "@chakra-ui/react";
import { LAYOUT_CONSTANTS } from "../../constants/layout";
import Timeline from "../timeline/Timeline";
import HomeHero from "./HomeHero";
import HomeQuickFacts from "./HomeQuickFacts";

interface HomeProps {
	isNarrowScreen: boolean;
}

export default function Home({ isNarrowScreen }: HomeProps) {
	return (
		<Box
			minH="100dvh"
			bg="gray.50"
			display="flex"
			flexDirection="column"
			py={{ base: "2", md: "12" }}
		>
			<Box
				maxW={LAYOUT_CONSTANTS.MAX_CONTENT_WIDTH}
				mx="auto"
				px={{ base: "1", md: "4" }}
				w="100%"
			>
				<Heading
					as="h2"
					size="3xl"
					fontWeight="bold"
					color="gray.900"
					textAlign="center"
					mb="12"
				>
					About Me
				</Heading>
				<Box
					bg="white"
					borderRadius={{ base: "lg", md: "xl" }}
					boxShadow="md"
					transition="all 0.3s"
					_hover={{ boxShadow: "xl" }}
				>
					<Box p={{ base: "2", md: "5" }}>
						<HomeHero />
						<HomeQuickFacts />

						{/* Timeline Section */}
						{isNarrowScreen && (
							<Heading
								as="h3"
								size="2xl"
								fontWeight="semibold"
								color="gray.800"
								textAlign="center"
								mb={{ base: "4", md: "8" }}
							>
								経歴
							</Heading>
						)}
						<Box mt={{ base: "4", md: "10" }}>
							<Timeline />
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
