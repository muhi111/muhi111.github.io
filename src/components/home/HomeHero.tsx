import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function HomeHero() {
	return (
		<Flex
			direction={{ base: "column", md: "row" }}
			align="center"
			gap={{ base: "4", md: "8" }}
			mb={{ base: "4", md: "8" }}
		>
			<Box
				boxSize={{ base: "80px", md: "120px" }}
				borderRadius="full"
				borderWidth="2px"
				borderColor="gray.300"
				bg="transparent"
				display="flex"
				alignItems="center"
				justifyContent="center"
				mx="auto"
				mb={4}
			>
				<Image
					src="/icon.png"
					alt="Profile"
					boxSize={{ base: "56px", md: "88px" }}
					objectFit="cover"
				/>
			</Box>
			<Box flex={1} textAlign={{ base: "center", md: "left" }}>
				<Heading
					as="h1"
					size={{ base: "xl", md: "2xl" }}
					fontWeight="bold"
					color="gray.900"
					mb="2"
				>
					muhi111
				</Heading>
				<Text
					fontSize={{ base: "lg", md: "xl" }}
					color="gray.600"
					lineHeight="relaxed"
				>
					Web Developer & Software Engineer
				</Text>
			</Box>
		</Flex>
	);
}
