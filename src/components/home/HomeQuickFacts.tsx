import { Box, Flex, Text } from "@chakra-ui/react";
import {
	FaGlobe,
	FaGraduationCap,
	FaLaptopCode,
	FaSchool,
} from "react-icons/fa";

export default function HomeQuickFacts() {
	return (
		<Box
			bg="gradient-to-r"
			bgGradient="linear(to-r, blue.50, purple.50)"
			borderRadius="lg"
			p={{ base: "2", md: "8" }}
			mb={{ base: "4", md: "14" }}
			border="1px solid"
			borderColor="blue.100"
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
						<Box mr={{ base: "2", md: "4" }} color="gray.600">
							<FaGraduationCap size={20} />
						</Box>
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
						<Box mr={{ base: "2", md: "4" }} color="gray.600">
							<FaSchool size={20} />
						</Box>
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
						<Box mr={{ base: "2", md: "4" }} color="gray.600">
							<FaGlobe size={20} />
						</Box>
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
						<Box mr={{ base: "2", md: "4" }} color="gray.600">
							<FaLaptopCode size={20} />
						</Box>
						<Text>Web開発やシステムプログラミングが好き</Text>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}
