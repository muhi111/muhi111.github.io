import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Article } from "../../data/articlesData";

interface ArticleItemProps {
	article: Article;
}

export default function ArticleItem({ article }: ArticleItemProps) {
	return (
		<Link
			href={article.url}
			target="_blank"
			rel="noopener noreferrer"
			_hover={{ textDecoration: "none" }}
			_focus={{ outline: "none", boxShadow: "none" }}
		>
			<Box
				py={4}
				px={4}
				borderBottom="1px solid"
				borderColor="gray.100"
				_last={{ borderBottom: "none" }}
				transition="all 0.2s"
				_hover={{
					bg: "gray.50",
				}}
				mx={-4}
				minH="100px"
				display="flex"
				alignItems="stretch"
				w="full"
			>
				<Flex direction="column" gap={3} w="full">
					{/* タイトルとリンクアイコン */}
					<Flex align="flex-start" justify="space-between" gap={3} minH="60px">
						<Box flex="1">
							<Text
								fontSize="lg"
								fontWeight="semibold"
								color="gray.900"
								lineHeight="short"
								_hover={{ color: "blue.600" }}
								transition="color 0.2s"
								display="-webkit-box"
								overflow="hidden"
								css={{
									WebkitLineClamp: 2,
									WebkitBoxOrient: "vertical",
								}}
							>
								{article.title}
							</Text>
						</Box>
						<Box color="gray.400" flexShrink={0} mt={1}>
							<FaExternalLinkAlt size={14} />
						</Box>
					</Flex>

					{/* 公開日 */}
					<Text fontSize="sm" color="gray.500" fontWeight="medium" mt="auto">
						{article.publishedAt}
					</Text>
				</Flex>
			</Box>
		</Link>
	);
}
