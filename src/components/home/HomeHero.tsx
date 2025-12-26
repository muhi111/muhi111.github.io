import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaQuestion } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

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
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} fontWeight="bold" color="gray.900" mb="2">
          muhi111
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" lineHeight="relaxed">
          Student of Science Tokyo
        </Text>
        <Flex
          gap={{ base: "3", md: "4" }}
          justify={{ base: "center", md: "flex-start" }}
          mt="4"
          flexWrap="wrap"
        >
          <Link
            href="https://github.com/muhi111"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap="2"
            px="3"
            py="2"
            borderRadius="md"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.2s"
            _hover={{
              bg: "gray.700",
              color: "white",
              borderColor: "gray.700",
            }}
          >
            <FaGithub size={20} />
            <Text fontSize="sm" fontWeight="medium">
              GitHub
            </Text>
          </Link>
          <Link
            href="https://qiita.com/muhi111"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap="2"
            px="3"
            py="2"
            borderRadius="md"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.2s"
            _hover={{
              bg: "gray.700",
              color: "white",
              borderColor: "gray.700",
            }}
          >
            <SiQiita size={20} />
            <Text fontSize="sm" fontWeight="medium">
              Qiita
            </Text>
          </Link>
          <Link
            href="https://muhi111.hatenablog.com/"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap="2"
            px="3"
            py="2"
            borderRadius="md"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.2s"
            _hover={{
              bg: "gray.700",
              color: "white",
              borderColor: "gray.700",
            }}
          >
            <FaQuestion size={20} />
            <Text fontSize="sm" fontWeight="medium">
              はてなブログ
            </Text>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
