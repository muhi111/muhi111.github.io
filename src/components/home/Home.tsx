import { Box, Heading } from "@chakra-ui/react";
import { LAYOUT_CONSTANTS } from "../../constants/layout";
import Sections from "../sections/Sections";
import HomeHero from "./HomeHero";
import HomeQuickFacts from "./HomeQuickFacts";
import SocialLinks from "./SocialLinks";

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
					bgGradient="linear(to-r, blue.500, purple.600)"
					bgClip="text"
					textAlign="center"
					mb="12"
				>
					About Me
				</Heading>
				<Box bg="white" borderRadius={{ base: "lg", md: "xl" }} boxShadow="md">
					<Box p={{ base: "2", md: "5" }}>
						<HomeHero />
						<HomeQuickFacts />
						<SocialLinks />

						{/* Sections */}
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
							<Sections />
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
