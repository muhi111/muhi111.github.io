import { Box } from "@chakra-ui/react";
import Sections from "../sections/Sections";
import HomeHero from "./HomeHero";

export default function Home() {
  return (
    <Box w="100%">
      <Box bg="white" borderRadius={{ base: "lg", md: "xl" }} boxShadow="md">
        <Box p={{ base: "2", md: "5" }}>
          <HomeHero />
          <Box mt={{ base: "4", md: "10" }}>
            <Sections />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
