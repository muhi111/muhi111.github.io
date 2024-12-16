import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import type React from "react";
import { AiOutlineStar } from "react-icons/ai";
import {
	FaDocker,
	FaGitAlt,
	FaHtml5,
	FaJs,
	FaLinux,
	FaNodeJs,
	FaPython,
	FaReact,
	FaStar,
	FaStarHalfAlt,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiC, SiMysql, SiTypescript } from "react-icons/si";

const skillsData = [
	{
		category: "Programming Languages",
		skills: [
			{ name: "C", level: 4.5, icon: SiC },
			{ name: "Go", level: 4, icon: FaGolang },
			{ name: "Python", level: 3.5, icon: FaPython },
			{ name: "JavaScript", level: 3.5, icon: FaJs },
		],
	},
	{
		category: "Web Technologies",
		skills: [
			{ name: "HTML/CSS", level: 4.5, icon: FaHtml5 },
			{ name: "React", level: 4, icon: FaReact },
			{ name: "Node.js", level: 3.5, icon: FaNodeJs },
			{ name: "TypeScript", level: 3.5, icon: SiTypescript },
		],
	},
	{
		category: "Other",
		skills: [
			{ name: "Linux", level: 4.5, icon: FaLinux },
			{ name: "Git", level: 4, icon: FaGitAlt },
			{ name: "Docker", level: 3.5, icon: FaDocker },
			{ name: "SQL", level: 3.5, icon: SiMysql },
		],
	},
];

function StarRating({ level }: { level: number }) {
	return (
		<Flex>
			{[1, 2, 3, 4, 5].map((star) => {
				if (star <= level) {
					return (
						<Icon key={star} color="yellow.400">
							<FaStar />
						</Icon>
					);
				}
				if (star - 0.5 <= level) {
					return (
						<Icon key={star} color="yellow.400">
							<FaStarHalfAlt />
						</Icon>
					);
				}
				return (
					<Icon key={star} color="yellow.400">
						<AiOutlineStar />
					</Icon>
				);
			})}
		</Flex>
	);
}

function SkillItem({
	name,
	level,
	IconComponent,
}: {
	name: string;
	level: number;
	IconComponent: React.ElementType;
}) {
	return (
		<Flex align="center" justify="space-between" mb={3}>
			<Flex align="center">
				<Icon w={5} h={5} mr={2} color="gray.600">
					<IconComponent />
				</Icon>
				<Text fontSize="sm" fontWeight="medium" color="gray.700">
					{name}
				</Text>
			</Flex>
			<StarRating level={level} />
		</Flex>
	);
}

function SkillCard({
	category,
	skills,
}: {
	category: string;
	skills: { name: string; level: number; icon: React.ElementType }[];
}) {
	return (
		<Box bg="white" rounded="lg" shadow="lg" p={6} transition="0.3s">
			<Heading as="h3" size="md" mb={4} color="gray.800">
				{category}
			</Heading>
			{skills.map((skill) => (
				<SkillItem
					key={skill.name}
					name={skill.name}
					level={skill.level}
					IconComponent={skill.icon}
				/>
			))}
		</Box>
	);
}

function Skills() {
	return (
		<Flex align="center" justify="center" minH="100vh" bg="gray.100" py={10}>
			<Box w="full" maxW="6xl" px={4}>
				<Heading
					as="h2"
					size="xl"
					mb={8}
					textAlign="center"
					color="gray.800"
					fontWeight="bold"
					fontSize={{ base: "1xl", md: "2xl" }}
				>
					My Skills
				</Heading>
				<Grid
					templateColumns={{
						base: "1fr",
						md: "repeat(2, minmax(280px, 1fr))",
						lg: "repeat(3, minmax(280px, 1fr))",
					}}
					gap={6}
				>
					{skillsData.map((category) => (
						<SkillCard
							key={category.category}
							category={category.category}
							skills={category.skills}
						/>
					))}
				</Grid>
			</Box>
		</Flex>
	);
}

export default Skills;
