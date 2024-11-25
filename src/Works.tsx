import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { Tag } from "./components/ui/tag";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const worksData = [
  {
    title: "Es writer",
    description: `一度経歴を入力すると以降はそれをもとにワンクリックでESを書いてくれるツール。
                  UXを重視してブラウザ拡張機能として実装したところが推しポイント。
                  フロントエンドの大部分とバックエンドの一部を担当。`,
    achievements: ["Progateハッカソン powered by AWS エムスリー株式会社賞"],
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "Go",
      "PostgreSQL",
      "Docker",
      "Terraform",
      "Amazon Bedrock",
      "Amazon Cognito",
      "Amazon EC2",
      "Amazon RDS",
    ],
    githubLink: "https://github.com/yamamoto99/es-writer",
    liveLink:
      "https://chromewebstore.google.com/detail/es-writer-extension/jkencchebhkbaomammmgbhnpalgkchkm",
  },
  {
    title: "ConoHa Control Panel",
    description: `GMO インターネットグループ株式会社 5daysインターン内の「ConoHaのコンパネを改良する」というお題のハッカソンで作成したConoHaのコントロールパネル。
                  初心者にも優しいUI・UXをテーマにチャット機能と、分かりやすい料金比較機能、スマホ表示時のミニマムなデザインを実装。
                  ConoHaのAPIを使用してチャット画面での対話形式でのVPS契約まで行えるところが推しポイント。
                  フロントエンドの一部とデプロイを担当。`,
    achievements: [
      "GMOインターネットグループ株式会社 2024年5daysインターン&ハッカソン 最優秀賞",
    ],
    tags: ["React", "TypeScript", "Vite", "Go", "Gin", "Docker", "ConoHa VPS"],
    githubLink: "https://github.com/muhi111/ConoHa",
    liveLink: "",
  },
  {
    title: "readme generator",
    description: `バッチや統計などのツールをプルダウンから選択すると、githubのプロフィールのREADMEを生成してくれるツール。
                  様々なOSSのコンテンツに対応していて、プレビュー機能も実装しているところが推しポイント。
                  メンバー全員で並行して実装。`,
    achievements: ["技育キャンプハッカソン vol.12 最優秀賞"],
    tags: ["React", "TypeScript", "TailwindCSS", "Vite", "AWS Amplify"],
    githubLink: "https://github.com/Teamsasa/readme-generator",
    liveLink: "https://readmes.studio/",
  },
  {
    title: "github sns profile card",
    description: `githubのプロフィールのREADMEにSNSのバッチと簡単な情報を表示するツール。
                  フォロー・フォロワー数や記事数など、SNSに関する情報を簡単に表示できるところが推しポイント。
                  メンバー全員で並行して実装。`,
    achievements: ["技育キャンプハッカソン vol.13 努力賞"],
    tags: ["Go", "Docker", "GCP Cloud Run"],
    githubLink: "https://github.com/Teamsasa/github-sns-profile-card",
    liveLink: "https://github-sns-profile-card-e53bc5obaa-an.a.run.app",
  },
  {
    title: "splatoon API",
    description: `Splatoon 3の非公開APIを叩くためのパラメータを取得するためのプログラム。
                  ステージや戦績・使用ブキ等々、大体の情報をAPI経由で取得できる。
                  Nintendo Switch Onlineのアプリ内で叩いているものをリバースエンジニアリングして実装。`,
    achievements: [],
    tags: ["Python"],
    githubLink: "https://github.com/muhi111/splatoon_api",
    liveLink: "",
  },
];

interface WorkDetailsProps {
  work: (typeof worksData)[0];
  onClose: () => void;
}

function WorkDetails({ work, onClose }: WorkDetailsProps) {
  return (
    <Flex
      position="fixed"
      inset="0"
      bg="blackAlpha.600"
      align="center"
      justify="center"
      p="4"
      zIndex="50"
    >
      <Box
        bg="white"
        rounded="lg"
        maxW="2xl"
        w="full"
        maxH="90vh"
        overflowY="auto"
      >
        <Box p="6">
          <Flex justify="space-between" align="center" mb="4">
            <Heading
              as="h3"
              size="lg"
              color="gray.800"
              fontWeight="bold"
              fontSize={{ base: "1xl", md: "2xl" }}
            >
              {work.title}
            </Heading>
            <Button onClick={onClose} color="gray.700">
              <Icon boxSize={6}>
                <FaTimes />
              </Icon>
            </Button>
          </Flex>
          <Text color="gray.600" mb="4" whiteSpace="pre-line">
            {work.description}
          </Text>
          {work.achievements.length > 0 && (
            <Box mb="4" bg="blue.50" p="3" rounded="lg">
              {work.achievements.map((achievement, index) => (
                <Text key={index} color="blue.800" fontWeight="medium">
                  {achievement}
                </Text>
              ))}
            </Box>
          )}
          <Flex wrap="wrap" mb="4">
            {work.tags.map((tag, index) => (
              <Tag key={index} bg="gray.200" color="gray.700" mr="2" mb="2">
                {tag}
              </Tag>
            ))}
          </Flex>
          <Flex justify="space-between">
            <Link
              href={work.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              color="gray.800"
              _hover={{ color: "gray.600" }}
            >
              <Icon mr="2">
                <FaGithub />
              </Icon>
              GitHub
            </Link>
            {work.liveLink && (
              <Link
                href={work.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                color="gray.800"
                _hover={{ color: "gray.600" }}
              >
                <Icon mr="2">
                  <FaExternalLinkAlt />
                </Icon>
                External Link
              </Link>
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

function WorkCard({
  work,
  onClick,
}: {
  work: (typeof worksData)[0];
  onClick: () => void;
}) {
  return (
    <Box
      bg="white"
      rounded="lg"
      shadow="lg"
      overflow="hidden"
      _hover={{ shadow: "2xl", transform: "scale(1.03)" }}
      transition="all 0.3s"
      cursor="pointer"
      onClick={onClick}
    >
      <Box p="6">
        <Heading as="h3" size="md" mb="2" color="gray.800" fontWeight="bold">
          {work.title}
        </Heading>
        <Text color="gray.600" mb="4" lineClamp={3}>
          {work.description}
        </Text>
        {work.achievements.length > 0 && (
          <Box mb="4" bg="blue.50" p="2" rounded="lg">
            <Text color="blue.800" fontWeight="medium" fontSize="sm">
              {work.achievements[0]}
            </Text>
          </Box>
        )}
        <Flex wrap="wrap" mb="4">
          {work.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index} bg="gray.200" color="gray.700" mr="2" mb="2">
              {tag}
            </Tag>
          ))}
          {work.tags.length > 3 && (
            <Text color="gray.600" fontSize="xs">
              +{work.tags.length - 3} more
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

function Works() {
  const [selectedWork, setSelectedWork] = useState<
    (typeof worksData)[0] | null
  >(null);

  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.100" py="10">
      <Box w="full" maxW="6xl" px="4">
        <Heading
          as="h2"
          size="xl"
          mb="8"
          textAlign="center"
          color="gray.800"
          fontWeight="bold"
          fontSize={{ base: "1xl", md: "2xl" }}
        >
          My Works
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, minmax(300px, 1fr))",
            lg: "repeat(3, minmax(300px, 1fr))",
          }}
          gap="6"
        >
          {worksData.map((work, index) => (
            <WorkCard
              key={index}
              work={work}
              onClick={() => setSelectedWork(work)}
            />
          ))}
        </Grid>
      </Box>
      {selectedWork && (
        <WorkDetails
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </Flex>
  );
}

export default Works;
