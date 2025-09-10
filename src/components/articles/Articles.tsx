import { Box, Heading, VStack } from "@chakra-ui/react";
import { LAYOUT_CONSTANTS } from "../../constants/layout";
import { articlesData } from "../../data/articlesData";
import ArticleItem from "../articles/ArticleItem";

export default function Articles() {
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
					as="h1"
					size="3xl"
					fontWeight="bold"
					color="gray.900"
					textAlign="center"
					mb="12"
				>
					Articles
				</Heading>

				<Box
					bg="white"
					borderRadius={{ base: "lg", md: "xl" }}
					boxShadow="md"
					p={{ base: "4", md: "8" }}
					maxW="4xl"
					mx="auto"
				>
					<VStack align="stretch" gap={0}>
						{articlesData.map((article) => (
							<ArticleItem key={article.id} article={article} />
						))}
					</VStack>
				</Box>
			</Box>
		</Box>
	);
}
