import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaQuestion } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

export default function SocialLinks() {
	return (
		<Box
			bg="gray.50"
			borderRadius="lg"
			p={{ base: "4", md: "6" }}
			mb={{ base: "4", md: "6" }}
		>
			<Text
				fontSize={{ base: "lg", md: "xl" }}
				fontWeight="semibold"
				color="gray.800"
				mb={{ base: "3", md: "4" }}
			>
				Links
			</Text>
			<Flex gap={{ base: "4", md: "6" }} flexWrap="wrap">
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
				</Link>{" "}
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
	);
}
