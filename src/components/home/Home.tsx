import { Box, Heading } from "@chakra-ui/react";
import { useLayout } from "../../contexts/LayoutContext";
import Sections from "../sections/Sections";
import HomeHero from "./HomeHero";

export default function Home() {
  const { isNarrowScreen } = useLayout();

  return (
    <Box w="100%">
      <Heading
        as="h2"
        size="3xl"
        fontWeight="bold"
        bgGradient="linear(to-r, blue.500, purple.600)"
        bgClip="text"
        textAlign="center"
        mb="3"
      >
        About Me
      </Heading>
      <Box bg="white" borderRadius={{ base: "lg", md: "xl" }} boxShadow="md">
        <Box p={{ base: "2", md: "5" }}>
          <HomeHero />

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
  );
}
