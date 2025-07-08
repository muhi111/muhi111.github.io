import { Box, Flex, Text } from "@chakra-ui/react";

export default function HomeQuickFacts() {
	return (
		<Box
			bg="gray.50"
			borderRadius="lg"
			p={{ base: "2", md: "8" }}
			mb={{ base: "4", md: "14" }}
		>
			<Box as="ul">
				<Box as="li">
					<Flex
						align="center"
						color="gray.700"
						fontSize={{ base: "base", md: "lg" }}
						py={{ base: "1", md: "2" }}
						px={{ base: "2", md: "4" }}
						borderRadius="lg"
					>
						<Text
							fontSize={{ base: "xl", md: "2xl" }}
							mr={{ base: "2", md: "4" }}
						>
							🎓
						</Text>
						<Text>東京科学大学 工学院 在学中</Text>
					</Flex>
				</Box>
				<Box as="li">
					<Flex
						align="center"
						color="gray.700"
						fontSize={{ base: "base", md: "lg" }}
						py={{ base: "1", md: "2" }}
						px={{ base: "2", md: "4" }}
						borderRadius="lg"
					>
						<Text
							fontSize={{ base: "xl", md: "2xl" }}
							mr={{ base: "2", md: "4" }}
						>
							🌱
						</Text>
						<Text>42Tokyo 所属</Text>
					</Flex>
				</Box>
				<Box as="li">
					<Flex
						align="center"
						color="gray.700"
						fontSize={{ base: "base", md: "lg" }}
						py={{ base: "1", md: "2" }}
						px={{ base: "2", md: "4" }}
						borderRadius="lg"
					>
						<Text
							fontSize={{ base: "xl", md: "2xl" }}
							mr={{ base: "2", md: "4" }}
						>
							🌐
						</Text>
						<Text>情報通信工学を専攻</Text>
					</Flex>
				</Box>
				<Box as="li">
					<Flex
						align="center"
						color="gray.700"
						fontSize={{ base: "base", md: "lg" }}
						py={{ base: "1", md: "2" }}
						px={{ base: "2", md: "4" }}
						borderRadius="lg"
					>
						<Text
							fontSize={{ base: "xl", md: "2xl" }}
							mr={{ base: "2", md: "4" }}
						>
							🖥️
						</Text>
						<Text>Web開発やシステムプログラミングが好き</Text>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}
