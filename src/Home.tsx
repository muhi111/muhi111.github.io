import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  List,
} from "@chakra-ui/react";

function Home() {
  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.100" py={10}>
      <Container maxW="5xl" px={4}>
        <Box bg="white" rounded="lg" shadow="lg" overflow="hidden">
          <Box p={8}>
            <Heading
              as="h1"
              fontSize="4xl"
              fontWeight="bold"
              mb={6}
              color="gray.800"
            >
              <Image
                src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&width=435&lines=Hi!+%F0%9F%91%8B++I'm+muhi111.+;I'm+a+student.;I'm+a+web+developer."
                alt="Typing SVG"
              />
            </Heading>
            <Box mb={6}>
              <Text fontSize="xl" mb={4} color="gray.700">
                A passionate student at Tokyo Institute of Technology, majoring
                in Information and Communications Engineering. Also, I'm a
                student at 42 Tokyo.
              </Text>
              <Text fontSize="lg" color="gray.600">
                I'm enthusiastic about web development and constantly learning
                new technologies to build innovative solutions.
              </Text>
            </Box>
            <Box mb={6}>
              <Heading
                as="h2"
                fontSize="2xl"
                fontWeight="semibold"
                mb={3}
                color="gray.800"
              >
                Quick Facts
              </Heading>
              <List.Root color="gray.600">
                <List.Item mb={2}>
                  🎓 Studying at Tokyo Institute of Technology
                </List.Item>
                <List.Item mb={2}>🖥️ Student at 42 Tokyo</List.Item>
                <List.Item mb={2}>
                  💻 Focusing on Information and Communications Engineering
                </List.Item>
                <List.Item mb={2}>
                  🌐 Exploring the world of web development
                </List.Item>
                <List.Item>🚀 Always eager to learn and grow</List.Item>
              </List.Root>
            </Box>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
}

export default Home;
